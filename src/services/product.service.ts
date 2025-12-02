import apiClient from './api.client';
import { API_ENDPOINTS } from '../config/api';
import type { Product } from '../types/product';
import type { Page, PageableParams } from '../types/page';

/**
 * Product filter parameters
 */
export interface ProductFilterParams extends PageableParams {
    search?: string;
    categoryId?: number;
}

/**
 * Product Service
 * Handles all product-related API calls using Axios
 */
class ProductService {
    /**
     * Get products with filters and pagination
     * @param params - Filter and pagination parameters
     * @returns Promise with paginated products
     */
    async getProducts(params?: ProductFilterParams): Promise<Page<Product>> {
        return apiClient.get<Page<Product>>(API_ENDPOINTS.PRODUCTS, { params });
    }

    /**
     * Get product by ID
     * @param id - Product ID
     * @returns Promise with product details
     */
    async getProductById(id: number): Promise<Product> {
        return apiClient.get<Product>(`${API_ENDPOINTS.PRODUCTS}/${id}`);
    }
}

export default new ProductService();
