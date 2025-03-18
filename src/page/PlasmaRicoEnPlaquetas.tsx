import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function PlasmaRicoEnPlaquetas() {
    const plasmaImage = import.meta.env.BASE_URL + "/images/ricoPlaquetas.jpg";

    return (
        <div className="container">
            <h1 className="title">Plasma Rico en Plaquetas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={plasmaImage} alt="Plasma Rico en Plaquetas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento con Plasma Rico en Plaquetas (PRP) es una técnica regenerativa utilizada tanto en el rostro
                    como en el cabello. Su aplicación estimula la producción de colágeno, mejora la textura de la piel y fortalece 
                    el crecimiento capilar.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UEgXy4EgRUo?si=RtjfDGQjGyK3xu_7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Regenera y rejuvenece la piel.</li>
                    <li>Estimula el crecimiento capilar y reduce la caída del cabello.</li>
                    <li>Mejora la elasticidad y firmeza de la piel.</li>
                    <li>Tratamiento natural sin riesgo de alergias.</li>
                </ul>

                {/* Áreas de Aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Rostro (anti-envejecimiento y rejuvenecimiento facial).</li>
                    <li>Cuero cabelludo (fortalecimiento del cabello y prevención de caída).</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura aproximadamente *1 hora*.  
                    El costo del tratamiento varía entre *$150 y $200*.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, me interesa el tratamiento de Plasma Rico en Plaquetas." />
            </div>
        </div>
    );
}
