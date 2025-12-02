import { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import type { Order } from '../types/order';

export default function ThankYouPage() {
	const { clearCart } = useCart();

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

	// Clear cart on mount
	useEffect(() => {
		clearCart();
	}, [clearCart]);

	// Helper formatters
	// const formatCurrency = (amount: number) => {
	// 	return new Intl.NumberFormat('es-PE', {
	// 		style: 'currency',
	// 		currency: 'PEN',
	// 		minimumFractionDigits: 2
	// 	}).format(amount);
	// };

	// const formatDate = (dateString?: string) => {
	// 	const date = dateString ? new Date(dateString) : new Date();
	// 	return new Intl.DateTimeFormat('es-PE', {
	// 		day: '2-digit', month: '2-digit', year: 'numeric',
	// 		hour: '2-digit', minute: '2-digit'
	// 	}).format(date);
	// };

	// Guard Clause: No data
	if (!orderData) {
		return (
			<div className="container my-5 text-center">
				<div className="alert alert-warning" role="alert">
					<i className="bi bi-exclamation-triangle me-2"></i>
					No se encontraron datos del pedido reciente.
				</div>
				<Link to="/shop" className="btn btn-primary mt-3">
					Ir a la Tienda
				</Link>
			</div>
		);
	}

	// Calculations
	// const total = orderData.total || 0;
	// const subtotalCalc = total / 1.18;
	// const igv = total - subtotalCalc;

	// return (
	// 	<div className="container my-5">
	// 		{/* Success Banner */}
	// 		<div className="alert alert-success text-center mb-4 d-print-none" role="alert">
	// 			<i className="bi bi-check-circle-fill me-2" style={{ fontSize: '32px' }}></i>
	// 			<h4 className="alert-heading mb-2">¡Pedido Confirmado!</h4>
	// 			<p className="mb-0">Tu compra ha sido procesada exitosamente.</p>
	// 		</div>

	// 		{/* Boleta Card */}
	// 		<div className="card border border-2 shadow-sm" style={{ maxWidth: '800px', margin: '0 auto' }} id="boleta-container">
	// 			<div className="card-body p-4 p-md-5">

	// 				{/* Header Boleta */}
	// 				<div className="row mb-4 pb-4 border-bottom align-items-center">
	// 					<div className="col-md-7">
	// 						<h2 className="text-primary fw-bold mb-0">PIXELPRO</h2>
	// 						<p className="text-muted small mb-0">Tecnología y Gaming</p>
	// 						<div className="mt-2 small">
	// 							<div><strong>RUC:</strong> 20123456789</div>
	// 							<div>Av. Javier Prado Este 4200, San Borja</div>
	// 							<div>Lima - Perú</div>
	// 						</div>
	// 					</div>
	// 					<div className="col-md-5 text-md-end mt-3 mt-md-0">
	// 						<div className="border border-2 border-dark p-3 text-center" style={{ borderStyle: 'dashed' }}>
	// 							<h6 className="fw-bold mb-1">BOLETA DE VENTA ELECTRÓNICA</h6>
	// 							<p className="mb-0 font-monospace fw-bold fs-5">
	// 								B001-{String(orderData.id).padStart(8, '0')}
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>

	// 				{/* Info Pedido */}
	// 				<div className="row mb-4 g-3">
	// 					<div className="col-sm-6">
	// 						<label className="text-muted small fw-bold text-uppercase">Fecha de Emisión</label>
	// 						<p className="mb-0">{formatDate(orderData.createdAt)}</p>
	// 					</div>
	// 					<div className="col-sm-6">
	// 						<label className="text-muted small fw-bold text-uppercase">Código de Pedido</label>
	// 						<p className="mb-0 fw-bold text-primary">{orderData.code}</p>
	// 					</div>
	// 				</div>

	// 				{/* Info Cliente */}
	// 				<div className="bg-light p-3 rounded mb-4">
	// 					<div className="row g-3">
	// 						<div className="col-md-6">
	// 							<label className="text-muted small fw-bold">CLIENTE</label>
	// 							<p className="mb-0 fw-semibold">
	// 								{orderData.customer.firstName} {orderData.customer.lastName}
	// 							</p>
	// 						</div>
	// 						<div className="col-md-6">
	// 							<label className="text-muted small fw-bold">DOCUMENTO</label>
	// 							<p className="mb-0">
	// 								{orderData.customer.documentType}: {orderData.customer.documentNumber}
	// 							</p>
	// 						</div>
	// 						{orderData.address && (
	// 							<div className="col-12 border-top mt-2 pt-2">
	// 								<label className="text-muted small fw-bold">DIRECCIÓN DE ENVÍO</label>
	// 								<p className="mb-0 small">
	// 									{orderData.address.addressLine}, {orderData.address.district}, {orderData.address.department}
	// 								</p>
	// 							</div>
	// 						)}
	// 					</div>
	// 				</div>

	// 				{/* Tabla Productos */}
	// 				<div className="table-responsive mb-4">
	// 					<table className="table table-sm table-borderless mb-0">
	// 						<thead className="border-bottom border-2">
	// 							<tr>
	// 								<th className="text-center" style={{ width: '10%' }}>CANT.</th>
	// 								<th style={{ width: '55%' }}>DESCRIPCIÓN</th>
	// 								<th className="text-end" style={{ width: '15%' }}>P. UNIT</th>
	// 								<th className="text-end" style={{ width: '20%' }}>IMPORTE</th>
	// 							</tr>
	// 						</thead>
	// 						<tbody>
	// 							{orderData.items.map((item) => (
	// 								<tr key={item.id} className="border-bottom">
	// 									<td className="text-center py-3 align-middle">{item.quantity}</td>
	// 									<td className="py-3 align-middle">
	// 										<span className="fw-semibold">{item.productName}</span>
	// 										<br />
	// 										<small className="text-muted">SKU: {item.productSku}</small>
	// 									</td>
	// 									<td className="text-end py-3 align-middle">{formatCurrency(item.unitPrice)}</td>
	// 									<td className="text-end py-3 align-middle fw-bold">
	// 										{formatCurrency(item.unitPrice * item.quantity)}
	// 									</td>
	// 								</tr>
	// 							))}
	// 						</tbody>
	// 					</table>
	// 				</div>

	// 				{/* Totales */}
	// 				<div className="row justify-content-end">
	// 					<div className="col-md-5">
	// 						<table className="table table-sm table-borderless">
	// 							<tbody>
	// 								<tr>
	// 									<td className="text-end">OP. GRAVADA:</td>
	// 									<td className="text-end">{formatCurrency(subtotalCalc)}</td>
	// 								</tr>
	// 								<tr>
	// 									<td className="text-end">I.G.V. (18%):</td>
	// 									<td className="text-end">{formatCurrency(igv)}</td>
	// 								</tr>
	// 								{orderData.shippingCost > 0 && (
	// 									<tr>
	// 										<td className="text-end">ENVÍO:</td>
	// 										<td className="text-end">{formatCurrency(orderData.shippingCost)}</td>
	// 									</tr>
	// 								)}
	// 								<tr className="border-top border-2 border-dark">
	// 									<td className="text-end pt-2"><h5 className="mb-0 fw-bold">TOTAL:</h5></td>
	// 									<td className="text-end pt-2"><h5 className="mb-0 fw-bold text-primary">{formatCurrency(total)}</h5></td>
	// 								</tr>
	// 							</tbody>
	// 						</table>
	// 					</div>
	// 				</div>

	// 				<div className="mt-5 text-center text-muted small d-print-none">
	// 					<p>Representación impresa de la Boleta de Venta Electrónica.</p>
	// 				</div>
	// 			</div>
	// 		</div>

	// 		{/* Botones de Acción */}
	// 		<div className="text-center mt-5 mb-5 d-print-none">
	// 			<div className="d-flex justify-content-center gap-3 flex-wrap">
	// 				<button className="btn btn-outline-dark px-4" onClick={() => window.print()}>
	// 					<i className="bi bi-printer me-2"></i> Imprimir
	// 				</button>
	// 				<Link to="/shop" className="btn btn-primary px-5">
	// 					Seguir Comprando
	// 				</Link>
	// 			</div>
	// 		</div>

	// 		{/* Estilos de Impresión */}
	// 		<style>{`
	//             @media print {
	//                 body * { visibility: hidden; }
	//                 #boleta-container, #boleta-container * { visibility: visible; }
	//                 #boleta-container { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none !important; border: none !important; }
	//                 .d-print-none { display: none !important; }
	//                 @page { margin: 0; size: auto; }
	//             }      `
	// 		}</style>
	// 	</div>
	// );

	return (
		<h1>Orden completada</h1>
	)

}