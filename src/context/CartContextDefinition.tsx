import { createContext } from 'react';
import type { Product, ProductVariant } from '../types/product';

// 1. Interfaces de Datos
export interface CartItem {
    productId: number;
    productName: string;
    price: number;
    image: string;
    variantId: number;
    variantSku: string;
    size: string;
    color: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    total: number;
    itemCount: number;
}

// 2. Interface del Contexto
export interface CartContextType {
    state: CartState;
    addToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
    removeFromCart: (productId: number, variantId: number) => void;
    updateQuantity: (productId: number, variantId: number, quantity: number) => void;
    clearCart: () => void;
}

// 3. Creación del Contexto (Lo que causa el error si está junto al componente)
export const CartContext = createContext<CartContextType | undefined>(undefined);