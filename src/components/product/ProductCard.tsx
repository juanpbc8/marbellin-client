import { Link } from 'react-router-dom';
import { getFullImageUrl } from '../../config/api';
import type { Product } from '../../types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Calculate total stock from all variants
    const totalStock = product.variants.reduce((acc, variant) => acc + variant.stock, 0);
    const isOutOfStock = totalStock === 0;

    return (
        <div className="producto" data-categoria={product.category.name.toLowerCase()}>
            <div className="card h-100 shadow-sm border-0 position-relative">
                {/* Out of Stock Badge */}
                {isOutOfStock && (
                    <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 1 }}>
                        <span className="badge bg-danger">Agotado</span>
                    </div>
                )}

                <Link to={`/product/${product.id}`} className="text-decoration-none">
                    <img
                        src={getFullImageUrl(product.imageUrl)}
                        className="card-img-top"
                        alt={product.name}
                        style={{
                            height: '200px',
                            objectFit: 'cover',
                            opacity: isOutOfStock ? 0.6 : 1
                        }}
                    />
                </Link>
                <div className="card-body text-center d-flex flex-column">
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                        <h6 className="card-title">{product.name}</h6>
                    </Link>
                    <p className="text-primary fw-bold mb-2">S/.{product.price.toFixed(2)}</p>
                    <div className="mt-auto">
                        <Link
                            to={`/product/${product.id}`}
                            className="btn btn-sm btn-primary w-100"
                        >
                            <i className="bi bi-eye me-1"></i>
                            Ver detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
