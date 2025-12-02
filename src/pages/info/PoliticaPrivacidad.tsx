export default function PoliticaPrivacidad() {
    return (
        <div className="container page-content my-5">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-center mb-4">
                    <i className="fas fa-user-shield me-2"></i>
                    Política de Privacidad
                </h1>

                <p className="lead text-muted">
                    En <strong>Corporación Innovitex Marbellin S.A.C</strong> valoramos y respetamos la privacidad de nuestros
                    usuarios. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal
                    cuando visitas nuestro sitio web o realizas una compra.
                </p>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-database"></i>
                        1. Información que recopilamos 📋
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Nombre completo</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Dirección de envío y facturación</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Correo electrónico</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Número de teléfono</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Información de pago (procesada por pasarelas seguras)</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-user-lock"></i>
                        2. Finalidad del uso 🎯
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Procesar tus pedidos y entregarlos correctamente.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Enviar confirmaciones, notificaciones o promociones (con tu consentimiento).</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Mejorar la experiencia de usuario y atención al cliente.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Cumplir con obligaciones legales.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-shield-alt"></i>
                        3. Protección de datos 🔐
                    </h2>
                    <p className="text-muted">
                        Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados, pérdidas o
                        alteraciones. Solo el personal autorizado accede a esta información con fines específicos.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-share-alt"></i>
                        4. Compartición con terceros 🤝
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">No vendemos ni compartimos tu información personal con terceros sin tu consentimiento.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">
                                Solo se comparte con proveedores logísticos o pasarelas de pago estrictamente necesarias para completar el servicio.
                            </span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-cookie-bite"></i>
                        5. Uso de cookies 🍪
                    </h2>
                    <p className="text-muted">
                        Este sitio utiliza cookies para mejorar la experiencia del usuario. Puedes configurar tu navegador para
                        rechazarlas, aunque algunas funciones podrían verse limitadas.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-user-edit"></i>
                        6. Acceso, modificación y eliminación de datos ✏️
                    </h2>
                    <p className="text-muted">
                        Como titular de tus datos, tienes derecho a acceder, rectificar, actualizar o solicitar la eliminación de tu
                        información. Puedes ejercer estos derechos escribiendo a{' '}
                        <a href="mailto:marbellin.lenceriafina@gmail.com" style={{ color: 'var(--marbellin-heading-color)' }}>
                            marbellin.lenceriafina@gmail.com
                        </a>.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-gavel"></i>
                        7. Base legal ⚖️
                    </h2>
                    <p className="text-muted">
                        Esta política se basa en la <strong>Ley N° 29733 - Ley de Protección de Datos Personales</strong> del Perú y su
                        reglamento.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-exclamation-circle"></i>
                        8. Cambios en esta política 🔄
                    </h2>
                    <p className="text-muted">
                        Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier cambio será publicado en
                        esta misma página con su respectiva fecha de actualización.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-envelope"></i>
                        9. Contacto 📧
                    </h2>
                    <p className="text-muted">
                        Si tienes consultas sobre esta política, puedes comunicarte con nosotros al correo:{' '}
                        <a href="mailto:marbellin.lenceriafina@gmail.com" style={{ color: 'var(--marbellin-heading-color)' }}>
                            marbellin.lenceriafina@gmail.com
                        </a>.
                    </p>
                </section>

                <p className="text-muted text-center mt-5 fst-italic">
                    <small>Última actualización: Junio 2025</small>
                </p>
            </div>
        </div>
    );
}
