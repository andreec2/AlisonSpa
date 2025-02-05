import { Routes, Route } from "react-router-dom";
import Header from './page/Header';
import Hero from './page/Hero';
import Services from './page/Services';
import Footer from './page/Footer';
import Morpheus8 from './page/Morpheus8'; // Importa el componente
import DepilacionLaser from "./page/DepilacionLaser"; 


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Services />
          </>} />
          <Route path="/services/morpheus8" element={<Morpheus8 />} />
          <Route path="/services/depilacion-laser" element={<DepilacionLaser />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
