import { useContext } from 'react';
// Ahora importamos desde el archivo de definición
import { CartContext } from '../context/CartContextDefinition';
import type { CartContextType } from '../context/CartContextDefinition';

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};