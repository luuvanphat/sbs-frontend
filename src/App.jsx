import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Spinner from './components/Spinner/Spinner';
import Home from './pages/Home/Home';

/**
 * Code-splitting theo route bằng React.lazy - Tuần 11
 * Trang chủ tải ngay (eager) vì là điểm vào đầu tiên của người dùng.
 * Các trang còn lại tải theo nhu cầu (lazy), giảm dung lượng bundle ban đầu.
 */
const About = lazy(() => import('./pages/About/About'));
const Products = lazy(() => import('./pages/Products/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const ComponentsDemo = lazy(() => import('./pages/ComponentsDemo/ComponentsDemo'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<Spinner label="Đang tải trang..." />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/dieu-khoan-dich-vu" element={<Terms />} />
          <Route path="/demo-components" element={<ComponentsDemo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
