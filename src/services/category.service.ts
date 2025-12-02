import apiClient from './api.client';
import { API_ENDPOINTS } from '../config/api';
import type { Category } from '../types/category';
import type { Page, PageableParams } from '../types/page';

/**
 * Category Service
 * Handles all category-related API calls using Axios
 */
class CategoryService {
    /**
     * Get all categories with pagination
     * @param params - Pagination parameters (page, size)
     * @returns Promise with paginated categories
     */
    async getAllCategories(params?: PageableParams): Promise<Page<Category>> {
        // Default to large size to get all categories if not specified
        const requestParams = {
            page: params?.page,
            size: params?.size ?? 100,
            sort: params?.sort,
        };

        return apiClient.get<Page<Category>>(API_ENDPOINTS.CATEGORIES, { params: requestParams });
    }

    /**
     * Get category by ID
     * @param id - Category ID
     * @returns Promise with category details
     */
    async getCategoryById(id: number): Promise<Category> {
        return apiClient.get<Category>(`${API_ENDPOINTS.CATEGORIES}/${id}`);
    }
}

export default new CategoryService();
