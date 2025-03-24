import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function Laser10Body() {
    const LaserImage = import.meta.env.BASE_URL + "/images/Laser10Body.jpg";
    return (
        <div className="container">
            <h1 className="title">Láser 10 Body</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={LaserImage} alt="Tratamiento Láser 10 Body" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento Láser 10 Body es una solución innovadora para la eliminación del vello no deseado
                    en diversas áreas del cuerpo. Gracias a su tecnología avanzada, permite obtener resultados duraderos,
                    dejando la piel suave y sin irritaciones.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kxnLqLGSMMY?si=3ccDgZ81dP9zGW1Z" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina el vello de manera eficaz y duradera.</li>
                    <li>Minimiza la irritación y evita el crecimiento de vellos encarnados.</li>
                    <li>Piel más suave y libre de imperfecciones.</li>
                    <li>Sesiones rápidas y seguras para todo tipo de piel.</li>
                </ul>

                {/* Aplicación */}
                <h2 className="subtitle">¿Para quién es recomendado?</h2>
                <ul className="list">
                    <li>Personas que buscan una solución permanente para el vello no deseado.</li>
                    <li>Ideal para cualquier zona del cuerpo.</li>
                    <li>Quienes desean una piel más tersa sin necesidad de rasurar o depilar con cera.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    El tratamiento consta de 10 sesiones para lograr una eliminación efectiva del vello.
                    <br />
                    <strong>Precio:</strong>
                    <ul className="list">
                        <li>10 sesiones → $900</li>
                        <li>1 sesión → $120</li>
                    </ul>
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento Láser 10 Body." />
            </div>
        </div>
    );
}
