
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Quiénes Somos' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/certificaciones', label: 'Certificaciones' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="shadow-2xl sticky top-0 z-50" style={{ backgroundColor: '#a88a39' }}>
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="http://imgfz.com/i/lPydK48.png" 
              alt="UIPSA Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-yellow-200 bg-black/20'
                    : 'text-white hover:text-yellow-200 hover:bg-black/10'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-200 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-black/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-yellow-200 bg-black/20'
                    : 'text-white hover:text-yellow-200 hover:bg-black/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
