import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function Morpheus8() {

    const Morpheus1 = import.meta.env.BASE_URL + "/images/DepilacionLaser.jpg";
    return (
        <div className="container">
            <h1 className="title">Morpheus8 - Rejuvenecimiento Facial y Corporal</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={Morpheus1} alt="Morpheus8 en acción" className="image" />
                </div>

                <p className="description">
                    Morpheus8 es un tratamiento revolucionario de radiofrecuencia fraccionada que estimula la producción de colágeno...
                </p>

                {/* Video */}
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/NBvs1za1J1E?si=v47eM_EpvPErYu99"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>

                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reafirma y tonifica la piel</li>
                    <li>Reduce arrugas y líneas de expresión</li>
                    <li>Mejora la apariencia de cicatrices y estrías</li>
                    <li>Minimiza los poros y unifica el tono de la piel</li>
                    <li>Resultados duraderos sin cirugía</li>
                </ul>
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Sesión de 45-60 minutos - Precio según evaluación
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Morpheus8." />
            </div>
        </div>
    );
}
