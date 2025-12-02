export default function Nosotros() {
    return (
        <div className="container page-content my-5">
            {/* Sección principal */}
            <section className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '2px' }}>
                    Más que lencería, una declaración de empoderamiento femenino
                </h1>                <p className="lead text-muted mx-auto" style={{ maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    La empresa fue fundada el 24 de noviembre de 2017, especializándose en la confección de ropa interior
                    femenina, en particular lencería en todos sus estilos. Desde sus inicios, ha buscado optimizar la
                    producción y distribución mediante tecnologías modernas y la capacitación continua de su personal, con
                    el objetivo de reducir costos y elevar la calidad de sus productos.
                </p>

                <p className="lead text-muted mx-auto" style={{ maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Queremos ser más que una marca: un reflejo de la fuerza, belleza y valor único de cada mujer, impactando
                    positivamente en su autoestima, bienestar y estilo de vida. Valoramos a nuestros colaboradores,
                    trabajando con ellos para que puedan crecer profesionalmente y disfrutar de múltiples beneficios.
                </p>
            </section>

            {/* Fila 1: Visión, Misión y Valores */}
            <section className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-eye" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">VISIÓN</h2>
                            <p className="text-muted text-start">
                                En el año 2030, MARBELLIN se consolidará como la marca de referencia en el mercado nacional e
                                internacional de ropa interior femenina, destacando por su excelencia en calidad, innovación
                                constante y presencia destacada en mercados clave como China, Ecuador, Chile, Portugal, Italia,
                                Francia y Brasil. Nuestro compromiso es satisfacer las necesidades de nuestros clientes globalmente,
                                manteniendo altos estándares de calidad y cumpliendo con normas internacionales de excelencia.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-bullseye" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">MISIÓN</h2>
                            <p className="text-muted text-start">
                                La misión de Marbellin es "Elevar y empoderar a las mujeres modernas a través de ropa interior de
                                alta calidad que combine comodidad, estilo y diseño innovador". Optimizamos la producción y
                                brindamos un servicio integral guiado por valores de calidad, innovación, estilo y empoderamiento,
                                inspirando confianza y seguridad en cada mujer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-handshake" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">VALORES ORGANIZACIONALES</h2>
                            <p className="text-muted text-start">
                                En MARBELLIN, nuestros valores guían cada acción. La Integridad asegura la calidad de nuestras
                                prendas, el Respeto se refleja en un trato empático con nuestros clientes, y la Empatía nos permite
                                priorizar sus necesidades. Apostamos por la Calidad, la Sostenibilidad en todo el proceso de
                                producción y la Innovación en nuestros diseños. La Responsabilidad Social nos impulsa a contribuir
                                al bienestar de la comunidad, y el Trabajo Cooperativo es esencial para lograr nuestros objetivos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fila 2: Beneficios para colaboradores */}
            <section className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-utensils" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">ALIMENTACIÓN CON PROPÓSITO</h2>
                            <p className="text-muted text-start">
                                En Marbellin, creemos que una buena alimentación impulsa el bienestar y el rendimiento. Por eso,
                                ofrecemos menús elaborados por especialistas en gastronomía, adaptados a los diferentes turnos de
                                trabajo. Cubrimos el 35% del costo, asegurando opciones nutritivas y deliciosas para nuestros
                                colaboradores.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-gift" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">CELEBRAMOS TUS MOMENTOS</h2>
                            <p className="text-muted text-start">
                                Acompañamos a nuestro equipo en los momentos que realmente importan. En casos de maternidad,
                                matrimonio o situaciones de salud, otorgamos auxilios económicos y permisos especiales. Además, en
                                fechas significativas como el Día de la Madre y el Día del Padre, brindamos tiempo libre para que
                                puedan celebrarlas con quienes más aman.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-trophy" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">RECONOCIMIENTO QUE INSPIRA</h2>
                            <p className="text-muted text-start">
                                El esfuerzo y la constancia merecen ser valorados. En Marbellin premiamos el cumplimiento de metas
                                con bonificaciones especiales, y en cada festividad, entregamos obsequios simbólicos como muestra de
                                agradecimiento por su compromiso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fila 3: Más beneficios */}
            <section className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-percent" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">DESCUENTOS Y OPORTUNIDADES</h2>
                            <p className="text-muted text-start">
                                Nuestros colaboradores disfrutan de descuentos exclusivos y facilidades de crédito para adquirir
                                nuestras prendas. Además, incentivamos el espíritu emprendedor brindando apoyo a quienes deseen
                                iniciar su propio negocio con productos Marbellin.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-leaf" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">COMPROMISO SOCIAL Y AMBIENTAL</h2>
                            <p className="text-muted text-start">
                                En Marbellin decimos no al plástico. Nuestros empaques son 100% ecológicos, fabricados en cartón y
                                papel, porque proteger el planeta también forma parte de nuestra esencia.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4 text-center">
                            <div className="mb-3">
                                <i className="fas fa-users" style={{ fontSize: '4rem', color: 'var(--marbellin-heading-color)' }}></i>
                            </div>
                            <h2 className="h4 fw-bold mb-3">UN EQUIPO CON CORAZÓN</h2>
                            <p className="text-muted text-start">
                                Somos más que una empresa: somos una familia apasionada por lo que hace. Amamos a nuestros clientes,
                                respetamos el medio ambiente y trabajamos cada día con entrega y orgullo para ofrecer productos de
                                alta calidad que empoderen a cada mujer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
