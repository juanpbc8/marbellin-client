import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartProvider';
import MainLayout from './layouts/MainLayout';
import AccountLayout from './layouts/AccountLayout';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import ProfilePage from './pages/account/ProfilePage';
import AddressesPage from './pages/account/AddressesPage';
import OrdersPage from './pages/account/OrdersPage';
import SettingsPage from './pages/account/SettingsPage';
// Info Pages
import Nosotros from './pages/info/Nosotros';
import Terminos from './pages/info/Terminos';
import PoliticaPrivacidad from './pages/info/PoliticaPrivacidad';
import CambiosDevoluciones from './pages/info/CambiosDevoluciones';
import Contacto from './pages/info/Contacto';
import LibroReclamaciones from './pages/info/LibroReclamaciones';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<ProductList />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="checkout/success" element={<ThankYouPage />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="auth/register" element={<Register />} />

              {/* Info Pages */}
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="terminos" element={<Terminos />} />
              <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
              <Route path="cambios-devoluciones" element={<CambiosDevoluciones />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="libro-reclamaciones" element={<LibroReclamaciones />} />

              {/* Protected Account Routes */}
              <Route
                path="account"
                element={
                  <ProtectedRoute>
                    <AccountLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="addresses" element={<AddressesPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
