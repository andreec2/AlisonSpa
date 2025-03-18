import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function EliminacionDeVenas() {
    const imageUrl = import.meta.env.BASE_URL + "/images/EliminacionDeVenas.png";

    return (
        <div className="container">
            <h1 className="title">Eliminación de Venas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={imageUrl} alt="Eliminación de Venas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento de eliminación de venas es un procedimiento estético diseñado para reducir o eliminar
                    venas varicosas y arañas vasculares, mejorando la apariencia de la piel y promoviendo una mejor circulación.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4kYFB_AmEMQ?si=timFaMXY1x1Ghtwf" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce la apariencia de venas varicosas y arañas vasculares.</li>
                    <li>Mejora la circulación sanguínea en la zona tratada.</li>
                    <li>Rápida recuperación y resultados visibles en pocas sesiones.</li>
                    <li>Procedimiento seguro y mínimamente invasivo.</li>
                </ul>

                {/* Áreas de Aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Piernas</li>
                    <li>Rostro</li>
                    <li>Manos</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura aproximadamente **1 hora**.  
                    El costo del tratamiento varía entre **$150 y $200**.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, me interesa el tratamiento de Eliminación de Venas." />
            </div>
        </div>
    );
}
