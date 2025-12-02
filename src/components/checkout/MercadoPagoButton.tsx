/**
 * MercadoPagoButton Component
 * Renders the Mercado Pago Checkout Pro Wallet button
 * Uses @mercadopago/sdk-react for integration
 * 
 * IMPORTANT: This component uses best practices to prevent duplicate button rendering:
 * 1. SDK initialization happens only once (outside component)
 * 2. Wallet component has a unique key based on preferenceId
 * 3. Container has a unique ID to prevent iframe injection conflicts
 */

import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

interface MercadoPagoButtonProps {
    preferenceId: string;
}

// Get Mercado Pago Public Key from environment variables
const MP_PUBLIC_KEY = import.meta.env.VITE_MP_PUBLIC_KEY as string;

// Initialize Mercado Pago SDK once (outside component to avoid re-initialization)
let isMercadoPagoInitialized = false;

export default function MercadoPagoButton({ preferenceId }: MercadoPagoButtonProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Initialize Mercado Pago SDK only once on mount
        if (!isMercadoPagoInitialized && MP_PUBLIC_KEY) {
            try {
                initMercadoPago(MP_PUBLIC_KEY, { locale: 'es-PE' });
                isMercadoPagoInitialized = true;
            } catch (error) {
                console.error('Error initializing Mercado Pago:', error);
            }
        }
    }, []); // Empty dependency array - runs only once on mount

    // Validate that the public key is configured
    if (!MP_PUBLIC_KEY) {
        return (
            <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle me-2"></i>
                <strong>Error de configuración:</strong> La clave pública de Mercado Pago no está configurada.
            </div>
        );
    }

    return (
        <div className="mercado-pago-wallet-container">
            {/* Loading Spinner - Show until Wallet is ready */}
            {!isReady && (
                <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando botón de pago...</span>
                    </div>
                    <p className="mt-3 text-muted small">Preparando método de pago seguro...</p>
                </div>
            )}

            {/* 
                Mercado Pago Wallet Component 
                - Unique ID prevents iframe injection conflicts
                - Key prop forces React to treat as new instance if preferenceId changes
                - Hidden until ready to prevent layout shifts
            */}
            <div
                id={`mp-wallet-${preferenceId}`}
                style={{ display: isReady ? 'block' : 'none' }}
            >
                <Wallet
                    key={preferenceId}
                    initialization={{ preferenceId }}
                    onReady={() => setIsReady(true)}
                />
            </div>

            {/* Security Badge */}
            {isReady && (
                <div className="text-center mt-3">
                    <small className="text-muted">
                        <i className="bi bi-shield-check me-1"></i>
                        Pago 100% seguro con Mercado Pago
                    </small>
                </div>
            )}
        </div>
    );
}
