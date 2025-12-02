import { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import type { Order } from '../types/order';

export default function ThankYouPage() {
	const { state, clearCart } = useCart();

	// Recuperar SOLO el formato nuevo (Order)
	const orderData = useMemo<Order | null>(() => {
		const lastOrderJSON = localStorage.getItem('lastOrder');
		if (lastOrderJSON) {
			try {
				return JSON.parse(lastOrderJSON) as Order;
			} catch (e) {
				console.error("Error parsing lastOrder", e);
				return null;
			}
		}
		return null;
	}, []);

	// Clear cart on mount - ONLY if cart has items (prevents infinite loop)
	useEffect(() => {
		if (state.items.length > 0) {
			clearCart();
		}
	}, [clearCart, state.items.length]);

	// Helper formatters
	// const formatCurrency = (amount: number) => {
	// 	return new Intl.NumberFormat('es-PE', {
	// 		style: 'currency',
	// 		currency: 'PEN',
	// 		minimumFractionDigits: 2
	// 	}).format(amount);
	// };

	const formatDate = (dateString?: string) => {
		const date = dateString ? new Date(dateString) : new Date();
		return new Intl.DateTimeFormat('es-PE', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	};

	// Guard Clause: No data
	if (!orderData) {
		return (
			<div className="container my-5 text-center">
				<div className="alert alert-warning shadow-sm" role="alert" style={{ maxWidth: '500px', margin: '0 auto' }}>
					<i className="bi bi-exclamation-triangle me-2"></i>
					<strong>No se encontraron datos del pedido reciente.</strong>
					<p className="mb-0 mt-2 small">Por favor, verifica tu historial de pedidos.</p>
				</div>
				<div className="mt-4">
					<Link to="/shop" className="btn btn-primary px-4">
						<i className="bi bi-shop me-2"></i>
						Ir a la Tienda
					</Link>
				</div>
			</div>
		);
	}

	// Extract customer name
	const customerName = orderData.customer?.firstName || 'Cliente';
	const customerEmail = orderData.customer?.email || '';

	return (
		<div className="container my-5">
			{/* Success Banner with Animation */}
			<div
				className="text-center mb-5"
				style={{
					background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 100%)',
					borderRadius: '20px',
					padding: '3rem 2rem',
					boxShadow: '0 10px 30px rgba(214, 51, 132, 0.15)'
				}}
			>
				{/* Animated Checkmark Icon */}
				<div
					className="mb-4"
					style={{
						animation: 'scaleIn 0.5s ease-out',
						display: 'inline-block'
					}}
				>
					<div
						className="d-inline-flex align-items-center justify-content-center rounded-circle"
						style={{
							width: '100px',
							height: '100px',
							background: 'linear-gradient(135deg, #D63384 0%, #E75480 100%)',
							boxShadow: '0 8px 20px rgba(214, 51, 132, 0.3)'
						}}
					>
						<i className="bi bi-check-lg text-white" style={{ fontSize: '4rem' }}></i>
					</div>
				</div>

				{/* Success Message */}
				<h1 className="fw-bold mb-3" style={{ color: '#D63384', fontSize: '2.5rem' }}>
					¡Gracias por tu compra, {customerName}!
				</h1>
				<p className="lead mb-0" style={{ color: '#6c757d', fontSize: '1.2rem' }}>
					Tu pedido ha sido confirmado y pronto será preparado con mucho cariño
				</p>
			</div>

			{/* Order Details Card */}
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="card border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
						{/* Card Header */}
						<div
							className="card-header text-white text-center py-4"
							style={{
								background: 'linear-gradient(135deg, #D63384 0%, #E75480 100%)',
								border: 'none'
							}}
						>
							<h5 className="mb-0 fw-bold">
								<i className="bi bi-receipt me-2"></i>
								Resumen de tu Pedido
							</h5>
						</div>

						{/* Card Body */}
						<div className="card-body p-4 p-md-5">
							{/* Order Code */}
							{/* <div className="text-center mb-4 pb-4 border-bottom">
								<label className="text-muted small text-uppercase mb-2">Código de Pedido</label>
								<div
									className="d-inline-block px-4 py-2 rounded"
									style={{
										backgroundColor: '#F8F9FA',
										border: '2px dashed #D63384'
									}}
								>
									<h3 className="mb-0 fw-bold font-monospace" style={{ color: '#D63384' }}>
										{orderData.code}
									</h3>
								</div>
							</div> */}

							{/* Order Info Grid */}
							<div className="row g-4 mb-4">
								{/* Date */}
								<div className="col-md-6">
									<div className="d-flex align-items-start">
										<div
											className="d-flex align-items-center justify-content-center rounded-circle me-3"
											style={{
												width: '48px',
												height: '48px',
												backgroundColor: '#FFF0F5',
												flexShrink: 0
											}}
										>
											<i className="bi bi-calendar-event" style={{ color: '#D63384', fontSize: '1.5rem' }}></i>
										</div>
										<div>
											<label className="text-muted small mb-1 d-block">Fecha del Pedido</label>
											<p className="mb-0 fw-semibold">{formatDate(orderData.createdAt)}</p>
										</div>
									</div>
								</div>

								{/* Delivery Type */}
								<div className="col-md-6">
									<div className="d-flex align-items-start">
										<div
											className="d-flex align-items-center justify-content-center rounded-circle me-3"
											style={{
												width: '48px',
												height: '48px',
												backgroundColor: '#FFF0F5',
												flexShrink: 0
											}}
										>
											<i
												className={`bi ${orderData.deliveryType === 'A_DOMICILIO' ? 'bi-house-door' : 'bi-shop'}`}
												style={{ color: '#D63384', fontSize: '1.5rem' }}
											></i>
										</div>
										<div>
											<label className="text-muted small mb-1 d-block">Tipo de Entrega</label>
											<p className="mb-0 fw-semibold">
												{orderData.deliveryType === 'A_DOMICILIO' ? 'Envío a Domicilio' : 'Recojo en Tienda'}
											</p>
										</div>
									</div>
								</div>

								{/* Total Amount */}
								{/* <div className="col-md-6">
									<div className="d-flex align-items-start">
										<div
											className="d-flex align-items-center justify-content-center rounded-circle me-3"
											style={{
												width: '48px',
												height: '48px',
												backgroundColor: '#FFF0F5',
												flexShrink: 0
											}}
										>
											<i className="bi bi-cash-stack" style={{ color: '#D63384', fontSize: '1.5rem' }}></i>
										</div>
										<div>
											<label className="text-muted small mb-1 d-block">Monto Total</label>
											<p className="mb-0 fw-bold fs-5" style={{ color: '#D63384' }}>
												{formatCurrency(orderData.total)}
											</p>
										</div>
									</div>
								</div> */}

								{/* Items Count */}
								{/* <div className="col-md-6">
									<div className="d-flex align-items-start">
										<div
											className="d-flex align-items-center justify-content-center rounded-circle me-3"
											style={{
												width: '48px',
												height: '48px',
												backgroundColor: '#FFF0F5',
												flexShrink: 0
											}}
										>
											<i className="bi bi-box-seam" style={{ color: '#D63384', fontSize: '1.5rem' }}></i>
										</div>
										<div>
											<label className="text-muted small mb-1 d-block">Productos</label>
											<p className="mb-0 fw-semibold">
												{orderData.items?.length || 0} {orderData.items?.length === 1 ? 'artículo' : 'artículos'}
											</p>
										</div>
									</div>
								</div> */}
							</div>

							{/* Email Confirmation Note */}
							{customerEmail && (
								<div
									className="alert mb-0"
									role="alert"
									style={{
										backgroundColor: '#FFF0F5',
										border: '1px solid #FFE4E1',
										borderRadius: '12px'
									}}
								>
									<div className="d-flex align-items-center">
										<i className="bi bi-envelope-check me-2" style={{ color: '#D63384', fontSize: '1.5rem' }}></i>
										<div>
											<strong style={{ color: '#D63384' }}>Confirmación enviada</strong>
											<p className="mb-0 small text-muted mt-1">
												Hemos enviado un correo de confirmación a <strong>{customerEmail}</strong>
											</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Call to Action Buttons */}
					<div className="text-center mt-5">
						<div className="d-flex justify-content-center gap-3 flex-wrap">
							{/* Primary CTA: Track Order */}
							<Link
								to="/account/orders"
								className="btn btn-lg px-5 py-3 fw-semibold"
								style={{
									background: 'linear-gradient(135deg, #D63384 0%, #E75480 100%)',
									border: 'none',
									borderRadius: '50px',
									color: 'white',
									boxShadow: '0 8px 20px rgba(214, 51, 132, 0.3)',
									transition: 'all 0.3s ease'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-2px)';
									e.currentTarget.style.boxShadow = '0 12px 25px rgba(214, 51, 132, 0.4)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 132, 0.3)';
								}}
							>
								<i className="bi bi-list-check me-2"></i>
								Ver Mis Pedidos
							</Link>

							{/* Secondary CTA: Continue Shopping */}
							<Link
								to="/shop"
								className="btn btn-lg btn-outline-secondary px-5 py-3 fw-semibold"
								style={{
									borderRadius: '50px',
									borderWidth: '2px',
									transition: 'all 0.3s ease'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor = '#D63384';
									e.currentTarget.style.color = '#D63384';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor = '#6c757d';
									e.currentTarget.style.color = '#6c757d';
								}}
							>
								<i className="bi bi-shop me-2"></i>
								Seguir Comprando
							</Link>
						</div>

						{/* Additional Info */}
						<div className="mt-4">
							<p className="text-muted small mb-0">
								<i className="bi bi-info-circle me-1"></i>
								¿Tienes alguna duda? Visita nuestra sección de{' '}
								<Link to="/info/support" style={{ color: '#D63384', textDecoration: 'none' }}>
									Ayuda y Soporte
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CSS Animation */}
			<style>{`
				@keyframes scaleIn {
					0% {
						transform: scale(0);
						opacity: 0;
					}
					50% {
						transform: scale(1.1);
					}
					100% {
						transform: scale(1);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	)

}