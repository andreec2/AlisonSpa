
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function MaquillajeProfesional() {
    const MaquillajeProfesionalI = import.meta.env.BASE_URL + "/images/MaquillajeProfesional.jpg";
    return (
        <div className="container">
            <h1 className="title">Maquillaje Profesional</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={MaquillajeProfesionalI} alt="Maquillaje Profesional" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El maquillaje profesional es una técnica avanzada utilizada para resaltar la belleza natural,
                    corregir imperfecciones y crear looks adecuados para diversas ocasiones.
                    Se emplean productos de alta calidad y técnicas especializadas para garantizar un acabado impecable y duradero.
                </p>

                {/* Video informativo */}

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Realza las facciones y corrige imperfecciones.</li>
                    <li>Utilización de productos de larga duración y alta calidad.</li>
                    <li>Adaptado a diferentes ocasiones: bodas, eventos, sesiones de fotos, etc.</li>
                    <li>Proporciona un acabado profesional y estético.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Maquillaje social (bodas, fiestas, eventos especiales).</li>
                    <li>Maquillaje artístico y de fantasía.</li>
                    <li>Maquillaje para televisión, cine y fotografía.</li>
                    <li>Maquillaje de pasarela y moda.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión de maquillaje puede durar entre 45 minutos y 1 hora, dependiendo de la complejidad del look.
                    Los precios varían entre $50 y $150, dependiendo de la técnica utilizada y la experiencia del maquillador.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el maquillaje Profesional." />
            </div>
        </div>
    );
}
