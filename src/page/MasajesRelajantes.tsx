import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function MasajesRelajantes() {
    const masajeImg = import.meta.env.BASE_URL + "/images/masaje-relajante.jpg";
    return (
        <div className="container">
            <h1 className="title">Masajes Relajantes</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={masajeImg} alt="Masajes Relajantes" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    Disfruta de un momento de bienestar y alivio con masajes relajantes que reducen el estrés y mejoran tu equilibrio físico y mental.
                </p>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce el estrés y la ansiedad.</li>
                    <li>Alivia tensiones musculares y dolores corporales.</li>
                    <li>Mejora la circulación sanguínea.</li>
                    <li>Favorece el descanso y la relajación profunda.</li>
                </ul>

                {/* Sesiones y precios */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión tiene una duración de 50 minutos.
                    <br />
                    Precio: $50 por sesión.
                    <br />
                    Paquete de 10 sesiones: $400.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, estoy interesado en los masajes relajantes." />
            </div>
        </div>
    );
}
