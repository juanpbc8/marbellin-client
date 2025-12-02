import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            // Aquí puedes agregar la lógica para enviar el formulario a tu API
            // Por ahora simularemos el envío
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitMessage({
                type: 'success',
                text: '¡Gracias por contactarnos! Te responderemos pronto. 💌'
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                correo: '',
                telefono: '',
                asunto: '',
                mensaje: ''
            });
        } catch (error) {
            setSubmitMessage({
                type: 'error',
                text: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container page-content my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
                        <div className="text-center mb-4">
                            <h1 className="mb-3">
                                <i className="fas fa-envelope me-2"></i>
                                CONTÁCTANOS 💬
                            </h1>
                            <p className="lead text-muted">
                                Para nosotros es importante escucharte, por favor déjanos tu duda, consulta o sugerencia.
                            </p>
                        </div>

                        {submitMessage && (
                            <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
                                {submitMessage.text}
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setSubmitMessage(null)}
                                    aria-label="Close"
                                ></button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="nombre" className="form-label fw-bold">
                                    <i className="fas fa-user me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Nombre completo:
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ingresa tu nombre completo"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="correo" className="form-label fw-bold">
                                    <i className="fas fa-envelope me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Correo electrónico:
                                </label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="correo"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    required
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="telefono" className="form-label fw-bold">
                                    <i className="fas fa-phone me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Número de teléfono:
                                </label>
                                <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{9}"
                                    placeholder="999999999"
                                />
                                <small className="text-muted">Formato: 9 dígitos</small>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="asunto" className="form-label fw-bold">
                                    <i className="fas fa-tag me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Asunto:
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="asunto"
                                    name="asunto"
                                    value={formData.asunto}
                                    onChange={handleChange}
                                    required
                                    placeholder="Motivo de tu consulta"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="mensaje" className="form-label fw-bold">
                                    <i className="fas fa-comment-dots me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Mensaje:
                                </label>
                                <textarea
                                    className="form-control form-control-lg"
                                    id="mensaje"
                                    name="mensaje"
                                    rows={5}
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder="Cuéntanos más sobre ti..."
                                ></textarea>
                            </div>

                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-lg fw-bold"
                                    style={{
                                        backgroundColor: 'var(--marbellin-heading-color)',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Enviar solicitud
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-5 text-center">
                            <h3 className="h5 mb-3">
                                <i className="fas fa-info-circle me-2"></i>
                                Otros medios de contacto
                            </h3>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <a
                                    href="https://wa.me/51922886724"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success"
                                >
                                    <i className="fab fa-whatsapp me-2"></i>
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:marbellin.lenceriafina@gmail.com"
                                    className="btn btn-outline-danger"
                                >
                                    <i className="fas fa-envelope me-2"></i>
                                    Email
                                </a>
                                <a
                                    href="tel:+51922886724"
                                    className="btn btn-outline-primary"
                                >
                                    <i className="fas fa-phone me-2"></i>
                                    Llamar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
