
import "../Styles/base.css";

export default function Peinados() {
    const PeinadosI = import.meta.env.BASE_URL + "../images/Peinados.jpg";
    return (
        <div className="container">
            <h1 className="title">Peinados Profesionales</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src={PeinadosI} alt="Peinados Profesionales" className="image" />
                </div>

                {/* Descripción */}
                <p className="description">
                    Los peinados profesionales están diseñados para adaptarse a cualquier ocasión especial,
                    desde eventos formales hasta reuniones informales. Se utilizan técnicas especializadas
                    y productos de calidad para garantizar un peinado duradero y elegante.
                </p>

                {/* Video informativo */}
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3CClOsC26Lw" title="Peinados Profesionales"></iframe>
                </div>

                {/* Beneficios */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li>Peinados personalizados según el tipo de evento.</li>
                    <li>Uso de productos profesionales para mayor duración.</li>
                    <li>Asesoría para elegir el mejor estilo según el rostro y el vestuario.</li>
                    <li>Técnicas avanzadas para un acabado impecable.</li>
                </ul>

                {/* Áreas de aplicación */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li>Bodas y eventos especiales.</li>
                    <li>Sesiones de fotos y pasarelas.</li>
                    <li>Peinados de gala y fiestas.</li>
                    <li>Peinados casuales para el día a día.</li>
                </ul>

                {/* Duración y precio */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description">
                    La duración del servicio varía entre 30 minutos y 1 hora, dependiendo del tipo de peinado.
                    Los precios oscilan entre $40 y $120, dependiendo del estilo y la complejidad del peinado.
                </p>
            </div>
        </div>
    );
}
