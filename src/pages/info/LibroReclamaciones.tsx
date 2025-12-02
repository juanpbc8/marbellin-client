import { useState } from 'react';
import type { FormEvent } from 'react';

export default function LibroReclamaciones() {
    const [formData, setFormData] = useState({
        nombre: '',
        dni: '',
        correo: '',
        telefono: '',
        direccion: '',
        producto: '',
        monto: '',
        tipo: '',
        detalle: '',
        pedido: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitMessage({
                type: 'success',
                text: '✅ Tu reclamo ha sido registrado exitosamente. Te responderemos en un plazo no mayor de 15 días hábiles.'
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                dni: '',
                correo: '',
                telefono: '',
                direccion: '',
                producto: '',
                monto: '',
                tipo: '',
                detalle: '',
                pedido: ''
            });
        } catch (error) {
            setSubmitMessage({
                type: 'error',
                text: '❌ Hubo un error al registrar tu reclamo. Por favor, intenta nuevamente.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container page-content my-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
                        <div className="text-center mb-4">
                            <h1 className="mb-3">
                                <i className="fas fa-book-open me-2"></i>
                                Libro de Reclamaciones 📖
                            </h1>
                            <p className="lead text-muted">
                                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a disposición de
                                nuestros clientes el presente Libro de Reclamaciones Virtual.
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
                            {/* Datos del consumidor */}
                            <fieldset className="border-0 mb-5">
                                <legend className="h4 mb-4 pb-2 border-bottom">
                                    <i className="fas fa-user me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Datos del consumidor 👤
                                </legend>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre" className="form-label fw-bold">
                                            Nombres y Apellidos <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingresa tu nombre completo"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="dni" className="form-label fw-bold">
                                            DNI o CE <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="dni"
                                            name="dni"
                                            value={formData.dni}
                                            onChange={handleChange}
                                            maxLength={12}
                                            required
                                            placeholder="Número de documento"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="correo" className="form-label fw-bold">
                                            Correo electrónico <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="correo"
                                            name="correo"
                                            value={formData.correo}
                                            onChange={handleChange}
                                            required
                                            placeholder="ejemplo@correo.com"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="telefono" className="form-label fw-bold">
                                            Teléfono <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            placeholder="999999999"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="direccion" className="form-label fw-bold">
                                            Dirección <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            value={formData.direccion}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu dirección completa"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Información del producto o servicio */}
                            <fieldset className="border-0 mb-5">
                                <legend className="h4 mb-4 pb-2 border-bottom">
                                    <i className="fas fa-box me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Información del producto o servicio 📦
                                </legend>

                                <div className="row g-3">
                                    <div className="col-md-8">
                                        <label htmlFor="producto" className="form-label fw-bold">
                                            Producto o servicio <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="producto"
                                            name="producto"
                                            value={formData.producto}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre del producto o servicio"
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="monto" className="form-label fw-bold">
                                            Monto reclamado (opcional)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="monto"
                                            name="monto"
                                            value={formData.monto}
                                            onChange={handleChange}
                                            step="0.01"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Detalle del reclamo */}
                            <fieldset className="border-0 mb-4">
                                <legend className="h4 mb-4 pb-2 border-bottom">
                                    <i className="fas fa-comment-dots me-2" style={{ color: 'var(--marbellin-heading-color)' }}></i>
                                    Detalle del reclamo 💬
                                </legend>

                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label fw-bold">
                                        Tipo <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="tipo"
                                        name="tipo"
                                        value={formData.tipo}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">-- Seleccione --</option>
                                        <option value="reclamo">Reclamo (desacuerdo con producto o servicio)</option>
                                        <option value="queja">Queja (malestar o descontento)</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="detalle" className="form-label fw-bold">
                                        Detalle del reclamo <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="detalle"
                                        name="detalle"
                                        rows={4}
                                        value={formData.detalle}
                                        onChange={handleChange}
                                        required
                                        placeholder="Describe detalladamente tu reclamo o queja..."
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pedido" className="form-label fw-bold">
                                        Pedido del consumidor <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="pedido"
                                        name="pedido"
                                        rows={3}
                                        value={formData.pedido}
                                        onChange={handleChange}
                                        required
                                        placeholder="¿Qué solicitas como solución?"
                                    ></textarea>
                                </div>
                            </fieldset>

                            {/* Nota legal */}
                            <div className="alert alert-info border-0" style={{ backgroundColor: '#f0f8ff' }}>
                                <small className="d-block mb-2">
                                    <i className="fas fa-info-circle me-2"></i>
                                    <strong>Importante:</strong>
                                </small>
                                <small className="d-block mb-1">
                                    • La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo
                                    para interponer una denuncia ante INDECOPI.
                                </small>
                                <small className="d-block">
                                    • El proveedor debe responder en un plazo no mayor de 15 días hábiles.
                                </small>
                            </div>

                            {/* Botón enviar */}
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
                                            Enviar reclamo
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
