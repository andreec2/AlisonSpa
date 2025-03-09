
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function DepilacionPigmentacion() {

    const DepilacionPigmentacionI = import.meta.env.BASE_URL + "images/PigmentacionCejas.jpg";


    return (
        <div className="container">
            <h1 className="title">Depilación y Pigmentación de cejas </h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={DepilacionPigmentacionI} alt="Depilación Láser y Tratamiento de Pigmentación" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    La depilación y pigmentación de cejas es un tratamiento estético que combina la eliminación del vello no
                    deseado con la aplicación de pigmento semipermanente para definir, dar forma y mejorar la apariencia de las cejas. Se utiliza para lograr un diseño más armonioso y natural, resaltando la expresión facial.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/t9r6b7_D8Zs?si=A0JjFrS5Xw5oF8G9&amp;controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Elimina el vello no deseado de manera duradera.</li>
                    <li>Reduce la hiperpigmentación en zonas afectadas.</li>
                    <li>Mejora la textura y el tono de la piel.</li>
                    <li>Evita la irritación causada por otros métodos de depilación.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Axilas</li>
                    <li>Zonas íntimas</li>
                    <li>Rostro (bigote, mentón, mejillas)</li>
                    <li>Piernas y brazos</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión dura entre 20 y 60 minutos, dependiendo del área a tratar.
                    Se recomienda un tratamiento de 6 a 8 sesiones para obtener mejores resultados.
                    Los precios varían entre $30 y $120 por sesión.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Depilación y Pigmentación de cejas." />
            </div>
        </div>
    );
}
