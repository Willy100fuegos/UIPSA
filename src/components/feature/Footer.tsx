
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="http://imgfz.com/i/lPydK48.png" 
                alt="UIPSA Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Unidad de Inteligencia y Protección - Expertos globales en la provisión de soluciones de seguridad privada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-yellow-600 rounded-full transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-yellow-600 rounded-full transition-colors duration-300 cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-yellow-600 rounded-full transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Quiénes Somos</Link></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Servicios</Link></li>
              <li><Link to="/certificaciones" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Certificaciones</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <i className="ri-whatsapp-line text-yellow-400"></i>
                <a href="https://wa.me/528992044798" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  +52 899 204 4798
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line text-yellow-400"></i>
                <a href="mailto:contacto@uipsa.mx" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  contacto@uipsa.mx
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-yellow-400"></i>
                <span className="text-gray-300">David Alfaro Siqueiros 104, Flor de Mayo, 66278 San Pedro Garza García, N.L.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2025 UIPSA. Todos los derechos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
