import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/san-pham" element={<Products />} />
      <Route path="/lien-he" element={<Contact />} />
    </Routes>
  );
}
export default App;