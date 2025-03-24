import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function Emsculpt() {
    const emsculptImage = import.meta.env.BASE_URL + "/images/emsculpt.jpg";
    
    return (
        <div className="container">
            <h1 className="title">Tratamiento Emsculpt</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={emsculptImage} alt="Tratamiento Emsculpt" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento Emsculpt tonifica los músculos y quema grasa simultáneamente 
                    mediante estimulación electromagnética de alta intensidad. Es un método no invasivo 
                    que ayuda a mejorar la apariencia y fuerza muscular de manera efectiva y sin esfuerzo.
                </p>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Tonificación muscular y reducción de grasa.</li>
                    <li>Resultados visibles en pocas sesiones.</li>
                    <li>Tratamiento no invasivo y sin dolor.</li>
                    <li>Ideal para abdomen, glúteos, brazos y piernas.</li>
                </ul>

                {/* Aplicación */}
                <h2 className="subtitle">¿Para quién es recomendado?</h2>
                <ul className="list">
                    <li>Personas que buscan mejorar la definición muscular.</li>
                    <li>Quienes desean complementar su rutina de ejercicio.</li>
                    <li>Ideal para quienes buscan una alternativa sin cirugía.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión tiene una duración de aproximadamente 30 minutos.  
                    <strong>Precios:</strong>  
                    - 1 sesión: $50  
                    - 10 sesiones: $400  
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Hola, estoy interesado en el tratamiento Emsculpt." />
            </div>
        </div>
    );
}
