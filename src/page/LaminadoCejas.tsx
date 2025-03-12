
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function LaminadoCejas() {
    const LaminadoCejasI = import.meta.env.BASE_URL + "/images/" + "LaminadoCejas.jpg";
    return (
        <div className=".container">
            <h1 className="title">Laminado de Cejas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={LaminadoCejasI} alt="Laminado de Cejas" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El laminado de cejas es un tratamiento estético que alinea y fija los vellos de las cejas en la dirección deseada,
                    logrando un efecto de mayor volumen y definición. Es ideal para quienes buscan unas cejas más rellenas y bien definidas
                    sin necesidad de maquillaje diario.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5OJqdqso6pY?si=dVGL9AktsH4kBbp9&amp;controls=0&amp;start=18" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Define y da forma a las cejas sin necesidad de maquillaje.</li>
                    <li>Brinda un efecto de cejas más gruesas y voluminosas.</li>
                    <li>Fija los vellos en su lugar para un acabado más ordenado.</li>
                    <li>Es un procedimiento no invasivo e indoloro.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Cejas naturales con vellos rebeldes.</li>
                    <li>Cejas con falta de volumen o asimetría.</li>
                    <li>Personas que buscan un look más pulido y definido.</li>
                    <li>Apto para todo tipo de piel y vello.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    El procedimiento dura aproximadamente 45 a 60 minutos y sus efectos pueden durar entre 4 y 6 semanas.
                    El costo del tratamiento varía entre $30 y $60, dependiendo del centro estético.
                </p>

                 {/* Botón de Reserva */}
                 <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Laminado de Cejas." />
            </div>
        </div>
    );
}
