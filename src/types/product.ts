import type { Category } from './category';

/**
 * Product Status enum matching backend
 */
export type ProductStatus = 'ACTIVO' | 'INACTIVO';

/**
 * Product Variant interface matching ProductVariantDto from backend API
 * Represents a specific SKU with size/color/stock combination
 */
export interface ProductVariant {
    id: number;
    sku: string;
    size: string;
    color: string;
    stock: number;
}

/**
 * Product interface matching ProductDto from backend API
 * Master product with multiple variants (sizes/colors)
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    status: ProductStatus;
    variants: ProductVariant[];
    category: Category;
    createdAt: string;
    updatedAt: string;
}
