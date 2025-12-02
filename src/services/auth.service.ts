import apiClient from './api.client';
import { API_ENDPOINTS } from '../config/api';
import type { LoginRequest, RegisterRequest, AuthResponse } from '../types/auth';

/**
 * Authentication Service
 * Handles all authentication-related API calls using Axios
 */
class AuthService {
    private readonly TOKEN_KEY = 'pixelpro_auth_token';
    private readonly USER_KEY = 'pixelpro_user';

    /**
     * Login user
     * @param credentials - Login credentials
     * @returns Promise with auth response
     */
    async login(credentials: LoginRequest): Promise<AuthResponse> {
        const data = await apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);

        // Save token and user info
        this.saveAuthData(data);

        return data;
    }

    /**
     * Register new user (Customer)
     * @param userData - Registration data
     * @returns Promise with auth response (auto-login)
     */
    async register(userData: RegisterRequest): Promise<AuthResponse> {
        const data = await apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, userData);

        // Auto-login: Save token and user info
        this.saveAuthData(data);

        return data;
    }

    /**
     * Get current user info from token
     * @returns Promise with auth response
     */
    async getCurrentUser(): Promise<AuthResponse | null> {
        const token = this.getToken();

        if (!token) {
            return null;
        }

        try {
            return await apiClient.get<AuthResponse>(API_ENDPOINTS.AUTH.ME);
        } catch (error) {
            console.error('Error fetching current user:', error);
            this.logout();
            return null;
        }
    }

    /**
     * Logout user
     */
    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
    }

    /**
     * Get stored token
     */
    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    /**
     * Get stored user info
     */
    getUser(): AuthResponse | null {
        const userStr = localStorage.getItem(this.USER_KEY);
        if (!userStr) return null;

        try {
            return JSON.parse(userStr);
        } catch {
            return null;
        }
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    /**
     * Save authentication data to localStorage
     * @param data - Auth response data
     */
    private saveAuthData(data: AuthResponse): void {
        localStorage.setItem(this.TOKEN_KEY, data.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(data));
    }
}

export default new AuthService();
