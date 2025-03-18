import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function Blanueamiento() {

    const Blaqueamiento = import.meta.env.BASE_URL + "/images/BlaqueamientoZonas.jpg";
    return (
        <div className="container">
            <h1 className="title">Blanqueamiento de Zonas Oscuras</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={Blaqueamiento} alt="Blanqueamiento de Zonas Oscuras" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El blanqueamiento de zonas oscuras es un tratamiento estético diseñado para aclarar áreas del cuerpo donde la piel ha
                    desarrollado hiperpigmentación. Se utiliza en zonas como axilas, entrepierna, codos y rodillas,
                    ofreciendo un tono más uniforme y luminoso sin dañar la piel.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nl7TNdJQlio?si=VhHgK3mcbHzSS7G9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Aclara la piel de manera progresiva y segura.</li>
                    <li>Hidrata y regenera la piel en áreas sensibles.</li>
                    <li>Reduce manchas causadas por fricción, hormonas o depilación.</li>
                    <li>Resultados visibles desde las primeras sesiones.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Axilas</li>
                    <li>Entrepierna</li>
                    <li>Codos y rodillas</li>
                    <li>Glúteos y línea del bikini</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Sesiones de 30 minutos con un costo desde $40 por área tratada en adelante.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Blanqueamiento de Zonas Oscuras." />
            </div>
        </div>
    );
}
