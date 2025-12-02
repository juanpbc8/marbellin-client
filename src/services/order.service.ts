/**
 * Order Service
 * Handles all API calls related to order creation and management using Axios
 */

import apiClient from './api.client';
import { API_ENDPOINTS } from '../config/api';
import type { Order } from '../types/order';
import type { CheckoutRequest } from '../types/checkout';

class OrderService {
    /**
     * Create a new order
     * POST /api/store/orders
     */
    async createOrder(data: CheckoutRequest): Promise<Order> {
        return apiClient.post<Order>(API_ENDPOINTS.ORDERS, data);
    }
}

export default new OrderService();
