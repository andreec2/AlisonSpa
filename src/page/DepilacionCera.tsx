
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function DepilacionCera() {
    const DepilacionCeraI = import.meta.env.BASE_URL + "/images/DepilacionCera.jpg";
    return (
        <div className="container">
            <h1 className="title">Depilación con Cera</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={DepilacionCeraI} alt="Depilación con Cera" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    La depilación con cera es un método efectivo y duradero para eliminar el vello no deseado desde la raíz,
                    dejando la piel suave y libre de vellos durante semanas. Es una opción ideal para quienes buscan resultados
                    prolongados sin el uso de cuchillas o cremas depilatorias.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/X-jBVTGaepY?si=F_sw4rPFd7P812KZ&amp;controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina el vello desde la raíz para un efecto más duradero.</li>
                    <li>Exfolia la piel, dejándola más suave y lisa.</li>
                    <li>Reduce el crecimiento del vello con el tiempo.</li>
                    <li>Menos irritación en comparación con el rasurado frecuente.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Piernas</li>
                    <li>Brazos</li>
                    <li>Axilas</li>
                    <li>Zonas íntimas (bikini, brasileña, hollywoodense)</li>
                    <li>Rostro (cejas, labio superior, mentón)</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura entre 20 y 60 minutos, dependiendo del área a tratar.
                    Los precios varían desde $10 hasta $50 por zona.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Depilación con Cera." />
            </div>
        </div>
    );
}
