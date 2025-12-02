/**
 * API Client - Axios Instance
 * Centralized HTTP client with request/response interceptors
 * Handles authentication, error handling, and response transformation
 */

import axios, { AxiosError } from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../config/api';

// Token storage key
const TOKEN_KEY = 'pixelpro_auth_token';

/**
 * Backend error response structure
 */
interface BackendErrorResponse {
    message?: string;
    error?: string;
    status?: number;
}

/**
 * Create Axios instance with base configuration
 */
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000, // 15 seconds timeout
});

/**
 * Request Interceptor
 * Automatically injects Authorization header if token exists
 */
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = localStorage.getItem(TOKEN_KEY);

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * Handles success responses and global error handling
 */
apiClient.interceptors.response.use(
    // Success handler - return data directly
    <T = unknown>(response: AxiosResponse<T>): T => {
        return response.data;
    },

    // Error handler
    (error: AxiosError<BackendErrorResponse>) => {
        // Handle 401 Unauthorized - clear auth and redirect to login
        if (error.response?.status === 401) {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem('pixelpro_user');

            // Redirect to login page
            if (window.location.pathname !== '/auth/login') {
                window.location.href = '/auth/login';
            }

            return Promise.reject(new Error('Sesión expirada. Por favor inicia sesión nuevamente.'));
        }

        // Extract error message from backend response
        let errorMessage = 'Error en la solicitud. Por favor intenta nuevamente.';

        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.response?.data?.error) {
            errorMessage = error.response.data.error;
        } else if (error.message) {
            errorMessage = error.message;
        }

        // Handle specific HTTP status codes
        switch (error.response?.status) {
            case 400:
                errorMessage = error.response.data?.message || 'Datos inválidos. Por favor verifica la información.';
                break;
            case 403:
                errorMessage = 'No tienes permisos para realizar esta acción.';
                break;
            case 404:
                errorMessage = error.response.data?.message || 'Recurso no encontrado.';
                break;
            case 409:
                errorMessage = error.response.data?.message || 'El recurso ya existe.';
                break;
            case 500:
                errorMessage = 'Error interno del servidor. Por favor intenta más tarde.';
                break;
        }

        return Promise.reject(new Error(errorMessage));
    }
);

export default apiClient;
