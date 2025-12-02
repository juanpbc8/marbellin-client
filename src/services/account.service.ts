/**
 * Account Service
 * Handles all API calls related to customer account management using Axios
 */

import apiClient from './api.client';
import { API_ENDPOINTS } from '../config/api';
import type { CustomerProfile, CustomerProfileUpdate, Address, AddressCreate, PasswordChangeRequest } from '../types/account';
import type { Order, OrderStatus } from '../types/order';
import type { Page } from '../types/page';

class AccountService {
    /**
     * Get customer profile
     * GET /api/store/account/profile
     */
    async getProfile(): Promise<CustomerProfile> {
        return apiClient.get<CustomerProfile>(API_ENDPOINTS.ACCOUNT.PROFILE);
    }

    /**
     * Create customer profile (for new users)
     * POST /api/store/account/profile
     */
    async createProfile(data: CustomerProfileUpdate): Promise<CustomerProfile> {
        return apiClient.post<CustomerProfile>(API_ENDPOINTS.ACCOUNT.PROFILE, data);
    }

    /**
     * Update customer profile
     * PUT /api/store/account/profile
     */
    async updateProfile(data: CustomerProfileUpdate): Promise<CustomerProfile> {
        return apiClient.put<CustomerProfile>(API_ENDPOINTS.ACCOUNT.PROFILE, data);
    }

    /**
     * Get all addresses for the customer
     * GET /api/store/account/addresses
     */
    async getAddresses(): Promise<Address[]> {
        return apiClient.get<Address[]>(API_ENDPOINTS.ACCOUNT.ADDRESSES);
    }

    /**
     * Add new address
     * POST /api/store/account/addresses
     */
    async addAddress(data: AddressCreate): Promise<Address> {
        return apiClient.post<Address>(API_ENDPOINTS.ACCOUNT.ADDRESSES, data);
    }

    /**
     * Delete address
     * DELETE /api/store/account/addresses/{id}
     */
    async deleteAddress(id: number): Promise<void> {
        return apiClient.delete<void>(`${API_ENDPOINTS.ACCOUNT.ADDRESSES}/${id}`);
    }

    /**
     * Change password
     * PATCH /api/store/account/password
     */
    async changePassword(data: PasswordChangeRequest): Promise<void> {
        return apiClient.patch<void>(API_ENDPOINTS.ACCOUNT.PASSWORD, data);
    }

    /**
     * Get customer orders with pagination
     * GET /api/store/account/orders
     */
    async getMyOrders(page: number = 0, size: number = 10, status?: OrderStatus): Promise<Page<Order>> {
        const params: Record<string, string | number> = {
            page,
            size,
        };

        if (status) {
            params.status = status;
        }

        return apiClient.get<Page<Order>>(API_ENDPOINTS.ACCOUNT.ORDERS, { params });
    }

    /**
     * Get order detail by ID
     * GET /api/store/account/orders/{id}
     */
    async getOrderById(id: number): Promise<Order> {
        return apiClient.get<Order>(`${API_ENDPOINTS.ACCOUNT.ORDERS}/${id}`);
    }
}

export default new AccountService();
