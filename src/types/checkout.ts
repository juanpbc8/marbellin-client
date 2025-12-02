/**
 * Checkout Types
 * Types for checkout process and order creation
 */

import type { DeliveryType } from './order';

/**
 * Payment methods supported by the frontend
 * - MERCADO_PAGO: Handles cards, Yape, and Plin via Mercado Pago SDK
 * - PAGO_EFECTIVO: Cash on pickup (only available for RECOJO_EN_TIENDA)
 * 
 * Note: TARJETA, YAPE, PLIN are deprecated in favor of MERCADO_PAGO
 */
export type PaymentMethod = 'MERCADO_PAGO' | 'PAGO_EFECTIVO';

/**
 * Checkout Item DTO
 * Individual item in the checkout request
 */
export interface CheckoutItemDto {
    productId: number;
    variantId: number;
    quantity: number;
}

/**
 * Checkout Request DTO
 * Data sent to POST /api/store/orders
 * Matches backend CartItemDto from api-docs.json
 */
export interface CheckoutRequest {
    addressId: number | null;
    deliveryType: DeliveryType;
    paymentMethod: PaymentMethod;
    items: CheckoutItemDto[];
}

/**
 * Legacy form interface (kept for backward compatibility)
 * @deprecated Use CheckoutRequest for API calls
 */
export interface CheckoutForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    documentNumber: string;
    address: string;
    department: string;
    province: string;
    district: string;
    paymentMethod: string;
}

/**
 * Order Summary for localStorage and ThankYouPage display
 */
export interface OrderSummary {
    orderId: string;
    customerName: string;
    items: Array<{
        id: number;
        nombre: string;
        precio: number;
        quantity: number;
    }>;
    subtotal: number;
    shipping: number;
    total: number;
    timestamp: string;
}
