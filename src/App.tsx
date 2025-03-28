import { Routes, Route } from "react-router-dom";
import Header from './page/Header';
import Hero from './page/Hero';
import Services from './page/Services';
import Footer from './page/Footer';
import Morpheus8 from './page/Morpheus'; // Importa el componente
import DepilacionLaser from "./page/DepilacionLaser";
import LimpiezaFacial from "@/page/LimpiezaFacial.tsx";
import TratamientoAcne from "./page/TratamientoAcne.tsx";
import DepilacionCera from "./page/DepilacionCera.tsx";
import DepilacionPigmentación from "./page/DepilacionPigmentacion.tsx";
import LaminadoCejas from "./page/LaminadoCejas.tsx";
import Blanqueamiento from "./page/Blanueamiento.tsx";
import MaquillajeProfesional from "./page/MaquillajeProfesional";
import TipoPestanas from "./page/TipoPestanas.tsx";
import Peinados from "./page/Peinados";
import Keratina from "./page/Keratina.tsx";
import PlasmaRicoEnPlaquetas from "./page/PlasmaRicoEnPlaquetas.tsx";
import EliminacionDeVenas from "./page/EliminacionDeVenas.tsx";
import EliminacionVerrugas from "./page/EliminacionVerrugas.tsx";
import EliminacionHongos from "./page/EliminacionHongos.tsx";
import Laser10Body from "./page/Laser10Body.tsx";
import MasajesReductores from "./page/MasajesReductores.tsx";
import MasajesRelajantes from "./page/MasajesRelajantes.tsx";
import Emsculpt from "./page/Emsculpt.tsx";


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
            <Route path="/services/morpheus" element={<Morpheus8 />} />
            <Route path="/services/limpieza-facial-profunda" element={<LimpiezaFacial />} />
            <Route path="/services/tratamiento-para-acne" element={<TratamientoAcne />} />
            <Route path="/services/depilacion-cera" element={<DepilacionCera />} />
            <Route path="/services/pigmentación-de-cejas" element={<DepilacionPigmentación />} />
            <Route path="/services/laminado-cejas" element={<LaminadoCejas />} />
            <Route path="/services/blanqueamiento-oscuras" element={<Blanqueamiento />} />
            <Route path="/services/maquillaje-profesional" element={<MaquillajeProfesional />} />
            <Route path="/services/pestañas-tipo" element={<TipoPestanas />} />
            <Route path="/services/peinados" element={<Peinados />} />
            <Route path="/services/depilacion-laser" element={<DepilacionLaser />} />
            <Route path="/services/Keratina" element={<Keratina />} />
            <Route path="/services/plasma-rico-en-plaquetas" element={<PlasmaRicoEnPlaquetas />} />
            <Route path="/services/eliminacion-de-venas" element={<EliminacionDeVenas />} />
            <Route path="/services/eliminacion-de-verrugas" element={<EliminacionVerrugas />} />
            <Route path="/services/eliminacion-de-hongos" element={<EliminacionHongos />} />
            <Route path="//services/laser10Body" element={<Laser10Body />} />
            <Route path="/services/emsculpt" element={<Emsculpt />} />
            <Route path="/services/masajes-reductores" element={<MasajesReductores />} />
            <Route path="/services/masajes-relajantes" element={<MasajesRelajantes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
