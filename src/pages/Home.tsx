import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/assets/imgs/portada-1.webp'];

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section - Portada */}
      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#FFE4EC'
        }}
      >
        {/* Imagen de fondo */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Portada ${index + 1}`}
              className="position-absolute w-100 h-100"
              style={{
                objectFit: 'contain',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: 0
              }}
            />
          ))}
        </div>

        {/* Texto sobre la imagen */}
        <div className="position-relative text-center text-white px-3" style={{ zIndex: 1 }}>
          <h1
            className="display-3 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
            }}
          >
            Marbellin Lencería Fina
          </h1>
          <p
            className="lead mb-4"
            style={{
              textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
              fontSize: '1.5rem'
            }}
          >
            Tu tienda de ropa interior con estilo y elegancia.
          </p>
          <Link
            to="/shop"
            className="btn btn-lg px-5 py-3 fw-bold rounded-pill"
            style={{
              backgroundColor: 'var(--marbellin-heading-color)',
              border: 'none',
              color: 'white'
            }}
          >
            Explorar colección
          </Link>
        </div>

        {/* Indicadores */}
        {slides.length > 1 && (
          <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4 d-flex gap-2" style={{ zIndex: 2 }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="rounded-circle border-0"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: currentSlide === index ? 'var(--marbellin-heading-color)' : 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer'
                }}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Mensaje de Bienvenida */}
      <section className="py-5">
        <div className="container">
          <div
            className="text-center mx-auto p-4 rounded-4 shadow-sm"
            style={{
              maxWidth: '700px',
              backgroundColor: '#FFCBD9'
            }}
          >
            <h2 className="mb-3" style={{ fontSize: '2rem' }}>
              Bienvenidos a Marbellin Lenceria Fina
            </h2>
            <p className="lead mb-0" style={{ fontSize: '1.2rem' }}>
              "Donde la elegancia se encuentra con la pasión para realzar la belleza de la mujer moderna."
            </p>
          </div>
        </div>
      </section>

      {/* Productos Nuevos */}
      <section className="py-5" style={{ backgroundColor: '#FFE4EC' }}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Productos Nuevos</h2>

          <div className="row g-4 justify-content-center">
            {/* Producto 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1049" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-cachetero-señorial-floreado.webp"
                      className="card-img-top"
                      alt="SEÑORIAL FLORADO"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">SEÑORIAL FLORADO</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/77.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/shop" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-2.webp"
                      className="card-img-top"
                      alt="SEMI HILO AVESTRUZ"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">SEMI HILO AVESTRUZ</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/71.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1052" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-cachetero-dije-estampado.webp"
                      className="card-img-top"
                      alt="CACHETERO DIJE ESTAMPADO"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">CACHETERO DIJE ESTAMPADO</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/64.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/shop" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-4.webp"
                      className="card-img-top"
                      alt="BOXER SHORT"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">BOXER SHORT</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/80.00</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Más Vendidos */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Más vendidos</h2>

          <div className="row g-4 justify-content-center">
            {/* Producto 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1051" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-cachetero-semi-señorial-juvenil.webp"
                      className="card-img-top"
                      alt="CACHETERO SEMI SEÑORIAL JUVENIL"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">CACHETERO SEMI SEÑORIAL JUVENIL</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/64.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1048" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-cachetero-corazon.webp"
                      className="card-img-top"
                      alt="CACHETERO CORAZON"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">CACHETERO CORAZON</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/68.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1050" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-bikini-blonda.webp"
                      className="card-img-top"
                      alt="BIKINI BLONDA"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">BIKINI BLONDA</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/69.00</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Producto 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to="/product/1053" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                  <div className="p-3 bg-white">
                    <img
                      src="/assets/imgs/modelo-semi-hilo-pretina-ancha.webp"
                      className="card-img-top"
                      alt="SEMI HILO PRETINA ANCHA"
                      style={{ objectFit: 'contain', maxHeight: '300px' }}
                    />
                  </div>
                  <div className="card-body text-center bg-white">
                    <h6 className="card-title">SEMI HILO PRETINA ANCHA</h6>
                    <p className="fw-bold mb-0" style={{ color: 'var(--marbellin-heading-color)' }}>S/65.00</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ayuda y Contacto */}
      <section className="py-5" style={{ backgroundColor: '#FFE4EC' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Texto */}
            <div className="col-md-6">
              <div className="p-4">
                <h3 className="fw-bold mb-3">💬 ¿Necesitas ayuda?</h3>
                <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                  Estamos aquí para ayudarte. Contáctanos para resolver tus dudas sobre
                  productos, tallas, envíos o cualquier otra consulta.
                </p>
                <div className="d-flex flex-column gap-3">
                  <Link to="/contacto" className="btn btn-lg rounded-pill shadow-sm" style={{ backgroundColor: 'var(--marbellin-heading-color)', color: 'white' }}>
                    <i className="fas fa-envelope me-2"></i> Contáctanos
                  </Link>
                  <Link to="/nosotros" className="btn btn-outline-secondary btn-lg rounded-pill">
                    <i className="fas fa-info-circle me-2"></i> Conoce más sobre nosotros
                  </Link>
                </div>
                <div className="mt-4 pt-3 border-top">
                  <p className="mb-2"><i className="fas fa-phone me-2"></i> <strong>Teléfono:</strong> +51 922 886 724</p>
                  <p className="mb-2"><i className="fas fa-envelope me-2"></i> <strong>Email:</strong> marbellin.lenceriafina@gmail.com</p>
                  <p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i> <strong>Dirección:</strong> Prolongación Huánuco 2010, Lima</p>
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="col-md-6">
              <img
                src="/assets/imgs/contacto-banner.webp"
                className="img-fluid rounded-4 shadow"
                alt="Contacto Marbellin"
                style={{ objectFit: 'cover', maxHeight: '400px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
