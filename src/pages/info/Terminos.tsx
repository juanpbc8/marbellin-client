import { Link } from 'react-router-dom';

export default function Terminos() {
    return (
        <div className="container page-content my-5">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-center mb-4">
                    <i className="fas fa-file-contract me-2"></i>
                    Términos y Condiciones
                </h1>

                <p className="lead text-muted">
                    Bienvenido/a a <strong>Corporación Innovitex Marbellin S.A.C</strong>. Al navegar o utilizar este sitio web,
                    aceptas los términos y condiciones que se detallan a continuación. Te pedimos leerlos cuidadosamente antes de
                    realizar una compra.
                </p>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-shopping-bag"></i>
                        1. Condiciones de compra 🛍️
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Todos los productos están sujetos a disponibilidad de stock.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Los precios pueden variar sin previo aviso, pero se respetará el precio mostrado al momento de la compra confirmada.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Las promociones no son acumulables, salvo indicación expresa.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Al confirmar un pedido, el cliente acepta voluntariamente las condiciones de venta.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-credit-card"></i>
                        2. Métodos de pago 💳
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Aceptamos pagos con tarjetas de crédito, débito y Yape/Plin.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Los pagos se procesan mediante pasarelas seguras de terceros autorizados.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">En caso de error en el pago o rechazo, el pedido no será procesado hasta regularizarse.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-shield-alt"></i>
                        3. Seguridad y protección de datos 🔒
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Los datos proporcionados son confidenciales y serán usados solo para fines relacionados con tu compra.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Cumplimos con la Ley de Protección de Datos Personales (Ley N° 29733).</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">
                                Puedes solicitar la modificación o eliminación de tus datos en cualquier momento escribiendo a{' '}
                                <a href="mailto:marbellin.lenceriafina@gmail.com" style={{ color: 'var(--marbellin-heading-color)' }}>
                                    marbellin.lenceriafina@gmail.com
                                </a>.
                            </span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-undo-alt"></i>
                        4. Política de cambios y devoluciones 🔄
                    </h2>
                    <p className="text-muted">
                        Las condiciones para cambios o devoluciones están detalladas en nuestra{' '}
                        <Link to="/cambios-devoluciones" style={{ color: 'var(--marbellin-heading-color)' }}>
                            Política de Cambios y Devoluciones
                        </Link>. Solo aceptamos devoluciones en productos sin uso, en perfecto estado y dentro del plazo indicado.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-truck"></i>
                        5. Envíos 🚚
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Hacemos envíos a todo el Perú a través de servicios logísticos confiables.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">El tiempo de entrega puede variar según la ciudad y el operador logístico.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">Los pedidos se procesan dentro de 24 a 48 horas hábiles luego de confirmado el pago.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-user-lock"></i>
                        6. Cuenta del usuario 👤
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">El cliente es responsable de mantener segura la información de su cuenta y contraseña.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">No compartas tus datos de acceso. Marbellin no se hace responsable por el mal uso de tu cuenta.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-ban"></i>
                        7. Restricciones 🚫
                    </h2>
                    <ul className="list-unstyled ps-4">
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">No está permitido utilizar el sitio para actividades ilegales o fraudulentas.</span>
                        </li>
                        <li className="mb-2 position-relative">
                            <i className="fas fa-check position-absolute start-0" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                            <span className="ps-4">El contenido del sitio no puede ser copiado ni distribuido sin autorización escrita.</span>
                        </li>
                    </ul>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-gavel"></i>
                        8. Legislación aplicable ⚖️
                    </h2>
                    <p className="text-muted">
                        Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia será resuelta ante los
                        tribunales de Lima Metropolitana.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                        <i className="fas fa-envelope-open-text"></i>
                        9. Contacto 📧
                    </h2>
                    <p className="text-muted">
                        Si tienes alguna duda sobre estos términos, puedes escribirnos a{' '}
                        <a href="mailto:marbellin.lenceriafina@gmail.com" style={{ color: 'var(--marbellin-heading-color)' }}>
                            marbellin.lenceriafina@gmail.com
                        </a>{' '}
                        o llamarnos al +51 922886724.
                    </p>
                </section>

                <p className="text-muted text-center mt-5 fst-italic">
                    <small>Última actualización: Junio 2025</small>
                </p>
            </div>
        </div>
    );
}
