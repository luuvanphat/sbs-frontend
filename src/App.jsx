import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import ComponentsDemo from './pages/ComponentsDemo/ComponentsDemo';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/demo-components" element={<ComponentsDemo />} />
      </Route>
    </Routes>
  );
}

export default App;
