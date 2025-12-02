/**
 * API Configuration
 * Centralized API endpoint configuration
 */

// CORRECCIÓN CRÍTICA:
// Usamos '' (cadena vacía) como fallback por defecto.
// Esto fuerza rutas relativas (ej: /api/products) permitiendo que el Proxy de Vite funcione.
// Si defines VITE_API_BASE_URL en .env, se usará ese valor.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

// Prefijos de API
export const API_PUBLIC_PREFIX = '/api/public';
export const API_STORE_PREFIX = '/api/store';
export const API_AUTH_PREFIX = '/api/auth';

// Endpoints Helpers (Rutas relativas)
export const API_ENDPOINTS = {
    PRODUCTS: `${API_PUBLIC_PREFIX}/products`,
    CATEGORIES: `${API_PUBLIC_PREFIX}/categories`,
    AUTH: {
        LOGIN: `${API_AUTH_PREFIX}/login`,
        REGISTER: `${API_AUTH_PREFIX}/register`,
        ME: `${API_AUTH_PREFIX}/me`,
    },
    ACCOUNT: {
        BASE: `${API_STORE_PREFIX}/account`,
        PROFILE: `${API_STORE_PREFIX}/account/profile`,
        ADDRESSES: `${API_STORE_PREFIX}/account/addresses`,
        PASSWORD: `${API_STORE_PREFIX}/account/password`,
        ORDERS: `${API_STORE_PREFIX}/account/orders`,
    },
    ORDERS: `${API_STORE_PREFIX}/orders`
} as const;

/**
 * Helper to construct full image URLs
 * Backend returns relative paths (/uploads/...), this prepends the base URL
 * @param imageUrl - Image URL from API (can be relative or absolute)
 * @returns Full image URL
 */
export function getFullImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) {
        return '/placeholder-product.png';
    }
    // Si ya es una URL absoluta (ej: https://cloudinary...), la devolvemos tal cual
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }
    // Si es relativa, concatenamos con la BASE_URL.
    // Si BASE_URL es '' (proxy), devolverá '/uploads/...', lo cual es correcto y seguro.
    return `${API_BASE_URL}${imageUrl}`;
}