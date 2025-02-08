import React from "react";
import "../Styles/base.css";

export default function DepilacionPigmentacion() {
    return (
        <div className="container">
            <h1 className="title">Depilación Láser</h1>

            <div className="content-box">
                {/* Imagen */}
                <div className="image-container">
                    <img src="/images/DepilacionLaser.jpg" alt="Depilación Láser" className="image" />
                </div>

                {/* Descripción vacía */}
                <p className="description"></p>

                {/* Video informativo vacío */}
                <div className="video-container">
                    <iframe width="560" height="315" src="" title="YouTube video player"></iframe>
                </div>

                {/* Beneficios vacíos */}
                <h2 className="subtitle">Beneficios:</h2>
                <ul className="list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                {/* Áreas de aplicación vacías */}
                <h2 className="subtitle">Áreas de Aplicación:</h2>
                <ul className="list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                {/* Duración y precio vacíos */}
                <h2 className="subtitle">Duración y Precio:</h2>
                <p className="description"></p>
            </div>
        </div>
    );
}
