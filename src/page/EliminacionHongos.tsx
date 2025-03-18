import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function EliminacionHongos() {
    const imagenHongos = import.meta.env.BASE_URL + "/images/EliminacionHongos.jpg";

    return (
        <div className="container">
            <h1 className="title">Eliminación de Hongos en las Uñas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={imagenHongos} alt="Eliminación de Hongos en las Uñas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    Tratamiento seguro y efectivo para eliminar hongos en las uñas de manos y pies,
                    restaurando su apariencia y salud sin procedimientos invasivos.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XbeZiNq4DYE?si=kscnXBL0rSlnQdAB" title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina infecciones fúngicas de manera efectiva.</li>
                    <li>Mejora la apariencia y salud de las uñas.</li>
                    <li>Procedimiento rápido y seguro.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura aproximadamente 1 hora y el precio varía entre $150 y $200.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, me interesa el tratamiento para eliminación de hongos en las uñas." />
            </div>
        </div>
    );
}
