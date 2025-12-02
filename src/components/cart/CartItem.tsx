import { useCart } from '../../hooks/useCart';
import type { CartItem as CartItemType } from '../../context/CartContextDefinition';
import { getFullImageUrl } from '../../config/api';

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();
    const subtotal = item.price * item.quantity;

    const handleIncrease = () => {
        updateQuantity(item.productId, item.variantId, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            updateQuantity(item.productId, item.variantId, item.quantity - 1);
        } else {
            removeFromCart(item.productId, item.variantId);
        }
    };

    const handleRemove = () => {
        removeFromCart(item.productId, item.variantId);
    };

    return (
        <div className="d-flex align-items-center justify-content-between border-bottom py-3">
            {/* Imagen y detalles del producto */}
            <div className="d-flex align-items-center">
                <img
                    src={getFullImageUrl(item.image)}
                    width="80"
                    className="me-3 rounded img-fluid"
                    style={{ objectFit: 'cover', height: '80px' }}
                    alt={item.productName}
                />
                <div className="flex-grow-1">
                    <strong>{item.productName}</strong>
                    <br />
                    <div className="mt-1">
                        <span className="badge bg-secondary me-1">
                            <i className="bi bi-palette me-1"></i>{item.color}
                        </span>
                        <span className="badge bg-secondary me-1">
                            <i className="bi bi-rulers me-1"></i>{item.size}
                        </span>
                        <small className="text-muted">SKU: {item.variantSku}</small>
                    </div>

                    {/* Controles de cantidad */}
                    <div className="d-flex align-items-center mt-2">
                        <div className="input-group input-group-sm" style={{ width: '120px' }}>
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleDecrease}
                            >
                                <i className="bi bi-dash"></i>
                            </button>
                            <input
                                type="text"
                                className="form-control text-center"
                                value={item.quantity}
                                readOnly
                                aria-label="Cantidad"
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleIncrease}
                            >
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                        <small className="text-muted ms-3">
                            Precio: S/.{item.price.toFixed(2)}
                        </small>
                    </div>
                </div>
            </div>

            {/* Subtotal y botón eliminar */}
            <div className="text-end">
                <strong className="d-block mb-2">S/.{subtotal.toFixed(2)}</strong>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={handleRemove}
                    title="Eliminar del carrito"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
}
