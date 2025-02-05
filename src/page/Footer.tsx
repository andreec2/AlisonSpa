import { Facebook, Instagram, Twitter } from 'lucide-react';
import '../Styles/Fooder.css'; // Asegúrate de importar el archivo CSS

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Contacto</h3>
            <p>Teléfono: +1 234 567 8900</p>
            <p>Email: info@bellaspa.com</p>
          </div>
          <div>
            <h3 className="footer-title">Dirección</h3>
            <p>123 Calle Principal</p>
            <p>Ciudad, Estado 12345</p>
          </div>
          <div>
            <h3 className="footer-title">Síguenos</h3>
            <div className="footer-social">
              <a href="#" className="footer-icon">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="footer-icon">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="footer-icon">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
