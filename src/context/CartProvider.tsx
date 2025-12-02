import { useReducer, useEffect, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
// Importamos la definición desde el otro archivo
import { CartContext } from './CartContextDefinition';
import type { CartItem, CartState } from './CartContextDefinition';
import type { Product, ProductVariant } from '../types/product';

// Definimos las acciones del Reducer (internas)
type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: { productId: number; variantId: number } }
    | { type: 'UPDATE_QUANTITY'; payload: { productId: number; variantId: number; quantity: number } }
    | { type: 'CLEAR_CART' }
    | { type: 'LOAD_CART'; payload: CartItem[] };

const initialState: CartState = {
    items: [],
    total: 0,
    itemCount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.productId === newItem.productId && item.variantId === newItem.variantId
            );

            let updatedItems;
            if (existingItemIndex >= 0) {
                updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += newItem.quantity;
            } else {
                updatedItems = [...state.items, newItem];
            }
            return calculateTotals(updatedItems);
        }

        case 'REMOVE_ITEM': {
            const updatedItems = state.items.filter(
                (item) => !(item.productId === action.payload.productId && item.variantId === action.payload.variantId)
            );
            return calculateTotals(updatedItems);
        }

        case 'UPDATE_QUANTITY': {
            const updatedItems = state.items.map((item) => {
                if (item.productId === action.payload.productId && item.variantId === action.payload.variantId) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            return calculateTotals(updatedItems);
        }

        case 'CLEAR_CART':
            return { items: [], total: 0, itemCount: 0 };

        case 'LOAD_CART':
            return calculateTotals(action.payload);

        default:
            return state;
    }
};

const calculateTotals = (items: CartItem[]): CartState => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    return { items, total, itemCount };
};

// EXPORTAMOS SOLO EL COMPONENTE
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('marbellin_cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart) && parsedCart.length > 0) {
                    if (parsedCart[0].variantId !== undefined) {
                        dispatch({ type: 'LOAD_CART', payload: parsedCart });
                    } else {
                        localStorage.removeItem('marbellin_cart');
                    }
                }
            }
        } catch (error) {
            console.error('Error loading cart', error);
            localStorage.removeItem('marbellin_cart');
        }
    }, []);

    useEffect(() => {
        if (state.items.length > 0) {
            localStorage.setItem('marbellin_cart', JSON.stringify(state.items));
        }
    }, [state.items]);

    // Memoized action functions to prevent infinite loops
    const addToCart = useCallback((product: Product, variant: ProductVariant, quantity: number) => {
        if (!variant || !variant.id) return;

        const item: CartItem = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            image: product.imageUrl,
            variantId: variant.id,
            variantSku: variant.sku,
            size: variant.size,
            color: variant.color,
            quantity,
        };

        dispatch({ type: 'ADD_ITEM', payload: item });
    }, []); // dispatch is stable, no dependencies needed

    const removeFromCart = useCallback((productId: number, variantId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantId } });
    }, []);

    const updateQuantity = useCallback((productId: number, variantId: number, quantity: number) => {
        if (quantity <= 0) {
            dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantId } });
        } else {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variantId, quantity } });
        }
    }, []); // Removed removeFromCart from dependencies, use dispatch directly

    const clearCart = useCallback(() => {
        localStorage.removeItem('marbellin_cart');
        dispatch({ type: 'CLEAR_CART' });
    }, []);

    // Memoize context value to prevent unnecessary re-renders
    const contextValue = useMemo(
        () => ({ state, addToCart, removeFromCart, updateQuantity, clearCart }),
        [state, addToCart, removeFromCart, updateQuantity, clearCart]
    );

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};