import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function DepilacionPigmentacion() {
    const DepilacionPigmentacionI = import.meta.env.BASE_URL + "images/PigmentacionCejas.jpg";

    return (
        <div className="container">
            <h1 className="title">Depilación y Pigmentación de Cejas</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img 
                        src={DepilacionPigmentacionI} 
                        alt="Depilación y Pigmentación de Cejas" 
                        className="image" 
                    />
                </div>

                {/* Descripción */}
                <p className="description">
                    La depilación y pigmentación de cejas es un tratamiento estético que elimina el vello no deseado y 
                    aplica pigmento semipermanente para definir su forma, logrando un diseño más armonioso y natural. 
                    Resalta la expresión facial y mejora la apariencia de las cejas.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/t9r6b7_D8Zs?si=A0JjFrS5Xw5oF8G9&amp;controls=0"
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Define y mejora la forma de las cejas.</li>
                    <li>Elimina el vello no deseado de forma precisa.</li>
                    <li>Brinda un aspecto natural y simétrico.</li>
                    <li>Ahorra tiempo en el maquillaje diario.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    Cada sesión dura entre 20 a 30 minutos, según el diseño deseado.    
                    el precio es de $30 por sesión.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Depilación y Pigmentación de cejas." />
            </div>
        </div>
    );
}
