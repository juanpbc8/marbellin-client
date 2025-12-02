import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useProductDetail } from '../hooks/useProductDetail';
import { getFullImageUrl } from '../config/api';
import type { ProductVariant } from '../types/product';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Fetch product from API - MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
    const { product, loading, error } = useProductDetail(Number(id));

    // State hooks - MUST BE UNCONDITIONAL
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    // Extract unique colors and sizes from variants - USE OPTIONAL CHAINING
    const availableColors = useMemo(() => {
        if (!product?.variants) return [];
        const colors = [...new Set(product.variants.map(v => v.color))];
        return colors;
    }, [product]);

    const availableSizes = useMemo(() => {
        if (!product?.variants) return [];
        const sizes = [...new Set(product.variants.map(v => v.size))];
        return sizes;
    }, [product]);

    // Find the current selected variant
    const currentVariant = useMemo<ProductVariant | undefined>(() => {
        if (!product?.variants || !selectedColor || !selectedSize) return undefined;
        return product.variants.find(
            v => v.color === selectedColor && v.size === selectedSize
        );
    }, [product, selectedColor, selectedSize]);

    // Check if a specific combination is available
    const isColorAvailable = (color: string): boolean => {
        if (!product) return false;
        return product.variants.some(v => v.color === color && v.stock > 0);
    };

    const isSizeAvailable = (size: string): boolean => {
        if (!product) return false;
        // If no color selected, check if size exists with stock
        if (!selectedColor) {
            return product.variants.some(v => v.size === size && v.stock > 0);
        }
        // If color selected, check if this size is available for that color
        return product.variants.some(
            v => v.size === size && v.color === selectedColor && v.stock > 0
        );
    };

    const handleAddToCart = () => {
        if (!currentVariant || currentVariant.stock === 0) return;

        setIsAdding(true);

        // Log cart payload for debugging
        console.log('Adding to cart:', {
            productId: product!.id,
            variantId: currentVariant.id,
            quantity: quantity,
            productName: product!.name,
            variantSku: currentVariant.sku,
            selectedSize: currentVariant.size,
            selectedColor: currentVariant.color,
            unitPrice: product!.price,
            imageUrl: product!.imageUrl
        });

        addToCart(product!, currentVariant, quantity);

        // Visual feedback
        setTimeout(() => {
            setIsAdding(false);
        }, 1500);
    };

    const handleBuyNow = () => {
        if (!currentVariant || currentVariant.stock === 0) return;

        addToCart(product!, currentVariant, quantity);
        navigate('/cart');
    };

    const getCategoryBadgeClass = (categoryName: string): string => {
        const badgeMap: Record<string, string> = {
            monitores: 'bg-primary',
            teclados: 'bg-success',
            ratones: 'bg-info',
            audifonos: 'bg-warning',
            graficas: 'bg-danger'
        };
        return badgeMap[categoryName.toLowerCase()] || 'bg-secondary';
    };

    // CONDITIONAL RETURNS - MUST COME AFTER ALL HOOKS
    // Loading state
    if (loading) {
        return (
            <div className="container my-5">
                <div className="text-center py-5">
                    <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Cargando producto...</span>
                    </div>
                    <p className="mt-3 text-muted">Cargando detalles del producto...</p>
                </div>
            </div>
        );
    }

    // Error or Product not found
    if (error || !product) {
        return (
            <div className="container my-5">
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-3 fs-3"></i>
                    <div>
                        <h4 className="alert-heading">Producto no encontrado</h4>
                        <p className="mb-3">
                            {error || 'Lo sentimos, el producto que buscas no existe o ha sido eliminado.'}
                        </p>
                        <Link to="/shop" className="btn btn-primary">
                            <i className="bi bi-arrow-left me-2"></i>
                            Volver a la tienda
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // MAIN RENDER - Product is guaranteed to be defined here
    return (
        <div className="container my-5">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/shop">Productos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {product.name}
                    </li>
                </ol>
            </nav>

            {/* Product Detail */}
            <div className="row g-5">
                {/* Left Column: Image */}
                <div className="col-md-6">
                    <img
                        src={getFullImageUrl(product.imageUrl)}
                        alt={product.name}
                        className="img-fluid rounded shadow-lg"
                        style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
                    />
                </div>

                {/* Right Column: Product Info */}
                <div className="col-md-6">
                    {/* Category Badge */}
                    <span className={`badge ${getCategoryBadgeClass(product.category.name)} mb-3`}>
                        {product.category.name.charAt(0).toUpperCase() + product.category.name.slice(1)}
                    </span>

                    {/* Title */}
                    <h1 className="fw-bold mb-3">{product.name}</h1>

                    {/* Price */}
                    <h2 className="text-primary fw-bold mb-4">
                        S/.{product.price.toFixed(2)}
                    </h2>

                    {/* Description */}
                    <p className="lead mb-4">{product.description}</p>

                    {/* Divider */}
                    <hr className="my-4" />

                    {/* Color Selector */}
                    <div className="mb-4">
                        <label className="form-label fw-semibold d-block">
                            Color {selectedColor && <span className="text-muted">- {selectedColor}</span>}
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                            {availableColors.map((color) => {
                                const available = isColorAvailable(color);
                                const isSelected = selectedColor === color;

                                return (
                                    <button
                                        key={color}
                                        className={`btn ${isSelected
                                            ? 'btn-secondary'
                                            : available
                                                ? 'btn-outline-secondary'
                                                : 'btn-outline-secondary'
                                            }`}
                                        onClick={() => {
                                            setSelectedColor(color);
                                            setSelectedSize(null); // Reset size when color changes
                                        }}
                                        disabled={!available}
                                        style={{
                                            minWidth: '100px',
                                            opacity: !available ? 0.5 : 1
                                        }}
                                    >
                                        {color}
                                        {!available && (
                                            <i className="bi bi-x-circle ms-1"></i>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Size Selector */}
                    <div className="mb-4">
                        <label className="form-label fw-semibold d-block">
                            Talla {selectedSize && <span className="text-muted">- {selectedSize}</span>}
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                            {availableSizes.map((size) => {
                                const available = isSizeAvailable(size);
                                const isSelected = selectedSize === size;

                                return (
                                    <button
                                        key={size}
                                        className={`btn ${isSelected
                                            ? 'btn-secondary'
                                            : available
                                                ? 'btn-outline-secondary'
                                                : 'btn-outline-secondary'
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                        disabled={!available}
                                        style={{
                                            minWidth: '80px',
                                            opacity: !available ? 0.5 : 1
                                        }}
                                    >
                                        {size}
                                        {!available && (
                                            <i className="bi bi-x-circle ms-1"></i>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Stock Information */}
                    <div className="mb-4">
                        {!selectedColor || !selectedSize ? (
                            <div className="alert alert-info mb-0">
                                <i className="bi bi-info-circle me-2"></i>
                                Selecciona un color y una talla para ver disponibilidad
                            </div>
                        ) : currentVariant ? (
                            <div className={`alert ${currentVariant.stock > 0 ? 'alert-success' : 'alert-danger'} mb-0`}>
                                <i className={`bi ${currentVariant.stock > 0 ? 'bi-check-circle' : 'bi-x-circle'} me-2`}></i>
                                {currentVariant.stock > 0 ? (
                                    <>
                                        <strong>Disponible:</strong> {currentVariant.stock} unidades en stock
                                        <br />
                                        <small className="text-muted">SKU: {currentVariant.sku}</small>
                                    </>
                                ) : (
                                    <>
                                        <strong>Agotado</strong> - Esta combinación no está disponible
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="alert alert-warning mb-0">
                                <i className="bi bi-exclamation-triangle me-2"></i>
                                Esta combinación no está disponible
                            </div>
                        )}
                    </div>

                    {/* Quantity Selector - Only show if variant is selected and has stock */}
                    {currentVariant && currentVariant.stock > 0 && (
                        <div className="mb-4">
                            <label htmlFor="quantity" className="form-label fw-semibold">
                                Cantidad
                            </label>
                            <div className="input-group" style={{ maxWidth: '150px' }}>
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <i className="bi bi-dash"></i>
                                </button>
                                <input
                                    type="number"
                                    className="form-control text-center"
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) => {
                                        const val = Math.max(1, Math.min(currentVariant.stock, parseInt(e.target.value) || 1));
                                        setQuantity(val);
                                    }}
                                    min="1"
                                    max={currentVariant.stock}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setQuantity(Math.min(currentVariant.stock, quantity + 1))}
                                >
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="d-grid gap-3">
                        <button
                            className={`btn btn-lg ${isAdding ? 'btn-success' : 'btn-primary'}`}
                            onClick={handleAddToCart}
                            disabled={!currentVariant || currentVariant.stock === 0 || isAdding}
                        >
                            {isAdding ? (
                                <>
                                    <i className="bi bi-check-circle me-2"></i>
                                    ¡Agregado al carrito!
                                </>
                            ) : !currentVariant || currentVariant.stock === 0 ? (
                                <>
                                    <i className="bi bi-cart-x me-2"></i>
                                    Selecciona opciones disponibles
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-cart-plus me-2"></i>
                                    Agregar al carrito
                                </>
                            )}
                        </button>

                        <button
                            className="btn btn-lg btn-success"
                            onClick={handleBuyNow}
                            disabled={!currentVariant || currentVariant.stock === 0}
                        >
                            <i className="bi bi-lightning-fill me-2"></i>
                            Comprar ahora
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-5">
                        <h5 className="fw-bold mb-3">Información adicional</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-truck text-primary me-2"></i>
                                Envío gratis en pedidos mayores a S/.200
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-shield-check text-success me-2"></i>
                                Garantía de 12 meses
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-arrow-return-left text-info me-2"></i>
                                30 días para devoluciones
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Back to Shop Button */}
            <div className="text-center mt-5">
                <Link to="/shop" className="btn btn-outline-secondary btn-lg">
                    <i className="bi bi-arrow-left me-2"></i>
                    Seguir comprando
                </Link>
            </div>
        </div>
    );
}
