import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function LimpiezaFacial() {
    const LimpiezaFacialI = import.meta.env.BASE_URL + "/images/LimpiezaFacial.png";
    return (
        <div className="container">
            <h1 className="title">Limpieza Facial Profunda</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img
                        src={LimpiezaFacialI}
                        alt="Limpieza Facial Profunda"
                        className="image"
                    />
                </div>

                <p className="description">
                    La limpieza facial profunda es un tratamiento esencial para mantener una piel saludable y radiante. Este
                    proceso elimina impurezas, células muertas y exceso de grasa, permitiendo que tu piel respire y absorba mejor
                    los productos de cuidado facial.
                </p>

                {/* Video */}
                <div className="video-container">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/z-Jf0evsLsE?si=pEGE9NBmt-ZL1tty&amp;controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina impurezas y puntos negros</li>
                    <li>Reduce la apariencia de poros dilatados</li>
                    <li>Previene el acné y las erupciones cutáneas</li>
                    <li>Mejora la circulación sanguínea</li>
                    <li>Prepara la piel para una mejor absorción de productos</li>
                </ul>

                {/* Proceso del Tratamiento */}
                <h2 className="subtitle">Proceso del Tratamiento:</h2>
                <ol className="list">
                    <li>Limpieza suave inicial</li>
                    <li>Exfoliación para remover células muertas</li>
                    <li>Vapor para abrir los poros</li>
                    <li>Extracción de impurezas</li>
                    <li>Mascarilla personalizada según tipo de piel</li>
                    <li>Aplicación de tónico y crema hidratante</li>
                </ol>

                {/* Duración y Precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">Sesión de 60-90 minutos - $80</p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de limpieza facial." />
            </div>
        </div>
    );
}
