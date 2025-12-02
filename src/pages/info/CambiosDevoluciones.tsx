export default function CambiosDevoluciones() {
    return (
        <div className="container page-content my-5">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-center mb-4">
                    <i className="fas fa-exchange-alt me-2"></i>
                    Cambios y Devoluciones
                </h1>

                <p className="lead text-muted">
                    En <strong>Corporación Innovitex Marbellin S.A.C</strong>, nos comprometemos a ofrecer una experiencia de
                    compra segura y satisfactoria. Si no estás conforme con tu compra, puedes solicitar un cambio o devolución bajo
                    las condiciones descritas a continuación.
                </p>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-box-open"></i>
                        Requisitos para cambios 📦
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">El producto debe estar sin uso, en buen estado y con etiquetas originales.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Debe presentarse el comprobante o boleta de compra.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">El plazo máximo es de <strong>7 días calendario</strong> desde la recepción del producto.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-paper-plane"></i>
                        Proceso de cambio 📝
                    </h2>
                    <ol className="ps-4">
                        <li className="mb-3">
                            Escríbenos a{' '}
                            <a href="mailto:marbellin.lenceriafina@gmail.com" style={{ color: 'var(--marbellin-heading-color)' }}>
                                marbellin.lenceriafina@gmail.com
                            </a>{' '}
                            indicando el número de pedido, motivo y fotos.
                        </li>
                        <li className="mb-3">
                            Coordinamos el recojo o entrega del producto con el área de atención.
                        </li>
                        <li className="mb-3">
                            Los costos de envío corren por cuenta del cliente salvo error por parte de Marbellin.
                        </li>
                    </ol>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-undo-alt"></i>
                        Devoluciones y reembolsos 💰
                    </h2>
                    <p className="text-muted mb-3">Aplica solo en casos como:</p>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Producto incorrecto respecto al pedido.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Fallas de fábrica detectadas al recibirlo.</span>
                        </li>
                    </ul>
                    <p className="text-muted mt-3">
                        Podrás elegir entre un reembolso total o el envío correcto sin costo.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-map-marker-alt"></i>
                        Cambios presenciales 🏪
                    </h2>
                    <div className="alert alert-info border-0" style={{ backgroundColor: '#f8f9fa' }}>
                        <p className="mb-2">
                            <strong>📍 Dirección:</strong> Prolongación Huánuco 2010, Esquina con Av. Isabel La Católica - La Victoria, Lima, Perú
                        </p>
                        <p className="mb-0">
                            <strong>🕐 Horario:</strong> Lunes a viernes de 10:00 a.m. a 6:00 p.m.
                        </p>
                    </div>
                </section>

                <p className="text-muted text-center mt-5 fst-italic">
                    <small>Última actualización: Junio 2025</small>
                </p>
            </div>
        </div>
    );
}
