
import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function TratamientoAcne() {
    const TratamientoAcneI = import.meta.env.BASE_URL + "/images/TratamientoAcne.jpg";
    return (
        <div className="container">
            <h1 className="title">Tratamiento para el Acné</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={TratamientoAcneI} alt="Tratamiento para el Acné" className="image"/>
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento para el acné ayuda a reducir la inflamación, eliminar impurezas y mejorar la textura
                    de la piel. Se utilizan técnicas avanzadas como peelings químicos, luz pulsada y limpieza profunda
                    para controlar la producción de grasa y prevenir brotes futuros.
                </p>
                <div className="video-container">
                {/* Video informativo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yNrHpfuVTVA?si=zXuaYi8hncugqvSU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce la inflamación y el enrojecimiento.</li>
                    <li>Disminuye la producción excesiva de grasa.</li>
                    <li>Previene la formación de cicatrices.</li>
                    <li>Mejora la textura y luminosidad de la piel.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Rostro.</li>
                    <li>Espalda.</li>
                    <li>Cuello.</li>
                    <li>Pecho.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La duración del tratamiento varía según el tipo de piel y la severidad del acné,
                    pero suele requerir entre 4 y 8 sesiones. Los precios oscilan entre $50 y $200 por sesión.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesan el tratamiento para el Acné." />

            </div>
        </div>
    );
}
