import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

export default function Footer() {
    const { categories, loading } = useCategories();

    return (
        <footer className="pt-5" style={{ backgroundColor: '#FFE4EC' }}>
            <div className="container">
                <div className="row">
                    {/* Ubicación de la tienda */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="fw-bold mb-3">
                            <i className="fas fa-map-marker-alt me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            Ubicación de tienda
                        </h6>
                        <p className="mb-2 small">
                            <i className="fas fa-store me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            Prolongación Huánuco 2010<br />
                            <span className="ms-4">Esquina con Av. Isabel La Católica</span><br />
                            <span className="ms-4">La Victoria, Lima, Perú</span>
                        </p>
                        <p className="mb-2 small">
                            <i className="fas fa-phone me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <a href="tel:+51922886724" className="text-dark text-decoration-none">+51 922886724</a>
                        </p>
                        <p className="mb-3 small">
                            <i className="fas fa-envelope me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <a href="mailto:marbellin.lenceriafina@gmail.com" className="text-dark text-decoration-none">
                                marbellin.lenceriafina@gmail.com
                            </a>
                        </p>
                        <div className="mt-3">
                            <a href="https://www.facebook.com/share/16LxCFavzs/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://www.instagram.com/marbellin_lenceria" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://www.tiktok.com/@maribellin.lenceria" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                                <i className="fab fa-tiktok fa-lg"></i>
                            </a>
                            <a href="https://youtube.com/@lenceria_de_dama_2024" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Tienda */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="fw-bold mb-3">
                            <i className="fas fa-shopping-bag me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            Tienda
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/shop" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Todos los productos
                                </Link>
                            </li>
                            {!loading && categories.slice(0, 5).map((category) => (
                                <li key={category.id} className="mb-2">
                                    <Link
                                        to={`/shop?category=${category.id}`}
                                        className="text-dark text-decoration-none small"
                                    >
                                        <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicio al cliente */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="fw-bold mb-3">
                            <i className="fas fa-headset me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            Servicio al cliente
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/nosotros" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contacto" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Contáctanos
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/libro-reclamaciones" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Libro de reclamaciones
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/cambios-devoluciones" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Cambios y devoluciones
                                </Link>
                            </li>
                            <li className="mb-2">
                                <a href="https://wa.me/51922886724" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Información legal */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="fw-bold mb-3">
                            <i className="fas fa-info-circle me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            Información legal
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/terminos" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Términos y condiciones
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/politica-privacidad" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Política de privacidad
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/payment-methods" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Métodos de pago
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/support" className="text-dark text-decoration-none small">
                                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                    Centro de ayuda
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <Link to="/libro-reclamaciones">
                                <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', color: 'var(--marbellin-heading-color)' }}></i>
                                Libro de reclamaciones
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'var(--marbellin-heading-color)', opacity: '0.3' }} />

                {/* Métodos de pago */}
                <div className="text-center mb-4">
                    <p className="small fw-bold mb-3">
                        <i className="fas fa-credit-card me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                        Métodos de pago aceptados
                    </p>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                        <img
                            src="/assets/icons/icon-visa.webp"
                            alt="Visa"
                            className="img-fluid"
                            style={{ maxHeight: '35px' }}
                        />
                        <img
                            src="/assets/icons/icon-mastercard.webp"
                            alt="MasterCard"
                            className="img-fluid"
                            style={{ maxHeight: '35px' }}
                        />
                        <img
                            src="/assets/icons/icon-american-express.webp"
                            alt="American Express"
                            className="img-fluid"
                            style={{ maxHeight: '35px' }}
                        />
                        <img
                            src="/assets/icons/icon-yape.webp"
                            alt="Yape"
                            className="img-fluid"
                            style={{ maxHeight: '35px' }}
                        />
                    </div>
                </div>

                <hr className="my-3" style={{ borderColor: 'var(--marbellin-heading-color)', opacity: '0.3' }} />

                {/* Copyright y empresa */}
                <div className="text-center pb-4">
                    <p className="mb-1 small fw-bold">CORPORACIÓN INNOVITEX MARBELLIN S.A.C</p>
                    <p className="mb-2 small text-muted">RUC: 20000000000 | Lima, Perú</p>
                    <small className="text-muted">© 2025 Marbellin Ladies Lingerie. Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
    );
}
