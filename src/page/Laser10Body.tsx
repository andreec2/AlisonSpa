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
                    El tratamiento Láser 10 Body es una tecnología avanzada diseñada para eliminar grasa localizada
                    de manera efectiva y no invasiva. Ayuda a esculpir la figura reduciendo medidas y mejorando
                    la apariencia de la piel.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kxnLqLGSMMY?si=3ccDgZ81dP9zGW1Z" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce grasa localizada de manera no invasiva.</li>
                    <li>Mejora la firmeza y apariencia de la piel.</li>
                    <li>Sesiones rápidas y sin tiempo de recuperación.</li>
                    <li>Moldea la figura de forma efectiva.</li>
                </ul>

                {/* Aplicación */}
                <h2 className="subtitle">¿Para quién es recomendado?</h2>
                <ul className="list">
                    <li>Personas que buscan reducir grasa localizada sin cirugía.</li>
                    <li>Ideal para abdomen, brazos, muslos y espalda.</li>
                    <li>Quienes desean mejorar su silueta sin procedimientos invasivos.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    El tratamiento consta de 10 sesiones para obtener resultados óptimos.
                    <br />
                    <strong>Precio:</strong>
                    <ul className="list">
                        <li>10 sesiones → $400</li>
                        <li>1 sesión → $50</li>
                    </ul>
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento Láser 10 Body." />
            </div>
        </div>
    );
}
