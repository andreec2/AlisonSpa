import "../Styles/base.css";
import WhatsAppButton from "./WhatsAppButton";

export default function Keratina() {
    const KeratinaI = import.meta.env.BASE_URL + "/images/Keratina.jpg";
    return (
        <div className="container">
            <h1 className="title">Tratamiento de Keratina</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={KeratinaI} alt="Tratamiento de Keratina" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    El tratamiento de keratina es una excelente opción para quienes desean un cabello más liso,
                    manejable y libre de frizz. La keratina ayuda a fortalecer la fibra capilar, proporcionando
                    brillo y suavidad, además de reducir el tiempo de peinado.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kxnLqLGSMMY?si=3ccDgZ81dP9zGW1Z" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Reduce el frizz y el volumen del cabello.</li>
                    <li>Aporta brillo y suavidad extrema.</li>
                    <li>Facilita el peinado y reduce el tiempo de secado.</li>
                    <li>Nutre y repara el cabello dañado.</li>
                </ul>

                {/* Aplicación */}
                <h2 className="subtitle">¿Para quién es recomendado?</h2>
                <ul className="list">
                    <li>Personas con cabello encrespado o difícil de manejar.</li>
                    <li>Quienes buscan un cabello más liso sin dañarlo.</li>
                    <li>Ideal para cabello tratado químicamente o con tendencia al frizz.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La sesión dura entre 1 y 3 horas, dependiendo del tipo y largo del cabello.
                    Los precios varían desde $120 hasta $250.
                </p>

                {/* Botón de Reserva */}
                <WhatsAppButton message="Buenas tardes, me interesa el tratamiento de Keratina." />
            </div>
        </div>
    );
}
