import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderPage from './pages/Order'
import Wishlist from './pages/Wishlist'
import Account from './pages/Account'
import Impact from './pages/Impact'
import AIStylist from './pages/AIStylist'
import VisualSearch from './pages/VisualSearch'
import Sell from './pages/Sell'
import { About, FAQ, NotFound } from './pages/Info'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order/:id" element={<OrderPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="account" element={<Account />} />
        <Route path="impact" element={<Impact />} />
        <Route path="ai-stylist" element={<AIStylist />} />
        <Route path="visual-search" element={<VisualSearch />} />
        <Route path="sell" element={<Sell />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
