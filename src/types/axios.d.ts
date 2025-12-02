/**
 * Axios Type Extensions
 * Extends Axios types to properly type the response interceptor
 */

import 'axios';

declare module 'axios' {
    export interface AxiosInstance {
        get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
        delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
        head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
        options<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
        post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
        put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
        patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
    }
}
