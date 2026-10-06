import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import Registro from './pages/Registro';
import InicioSesion from './pages/InicioSesion';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Perfil from './pages/Perfil';
import NoEncontrado from './pages/NoEncontrado';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/404" element={<NoEncontrado />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
