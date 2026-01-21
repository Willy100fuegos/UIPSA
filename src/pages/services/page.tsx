
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los Servicios' },
    { id: 'monitoring', name: 'Monitoreo y Rastreo' },
    { id: 'security', name: 'Seguridad Perimetral' },
    { id: 'investigation', name: 'Investigación Forense' },
    { id: 'infrastructure', name: 'Infraestructura' }
  ];

  const services = [
    // MONITOREO Y RASTREO SATELITAL
    {
      id: 1,
      category: 'monitoring',
      title: 'C4 - Centro de Control, Comando, Comunicaciones y Cómputo',
      description: 'Sistema integral de monitoreo y control para flotillas vehiculares con tecnología de vanguardia.',
      icon: 'ri-dashboard-3-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20command%20and%20control%20center%20with%20multiple%20large%20monitors%20displaying%20vehicle%20tracking%20maps%2C%20professional%20operators%20monitoring%20fleet%20management%20systems%2C%20high-tech%20surveillance%20room%20with%20blue%20lighting%2C%20sophisticated%20GPS%20tracking%20interface%20displays&width=400&height=300&seq=c4-control-center&orientation=landscape',
      features: [
        'Flotillas Vehiculares: Rutas y optimización de recorridos',
        'Control de velocidad y comportamiento de conductores',
        'Geocercas y alertas automáticas',
        'Reportes de combustible y mantenimiento predictivo',
        'Seguridad funcional y custodia'
      ]
    },
    {
      id: 2,
      category: 'monitoring',
      title: 'Monitoreo de Vehículos Ejecutivos',
      description: 'Protección especializada para transporte ejecutivo con botón de pánico silencioso y respuesta inmediata.',
      icon: 'ri-car-line',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20executive%20vehicle%20with%20advanced%20GPS%20tracking%20system%2C%20professional%20security%20monitoring%20setup%2C%20high-end%20car%20interior%20with%20emergency%20communication%20devices%2C%20sophisticated%20vehicle%20security%20technology%2C%20executive%20protection%20environment&width=400&height=300&seq=executive-vehicle-monitoring&orientation=landscape',
      features: [
        'Botón de Pánico Silencioso',
        'Trazado de rutas seguras',
        'Respuesta rápida en caso de desvío',
        'Protocolo de emergencia especializado',
        'Monitoreo 24/7'
      ]
    },
    {
      id: 3,
      category: 'monitoring',
      title: 'Monitoreo de Activos',
      description: 'Rastreo y protección de maquinaria pesada y activos de alto valor con tecnología GPS avanzada.',
      icon: 'ri-truck-line',
      image: 'https://readdy.ai/api/search-image?query=Heavy%20industrial%20machinery%20with%20GPS%20tracking%20devices%2C%20construction%20equipment%20monitoring%20system%2C%20professional%20asset%20tracking%20technology%2C%20industrial%20site%20with%20tracked%20vehicles%20and%20equipment%2C%20sophisticated%20monitoring%20sensors%20on%20heavy%20machinery&width=400&height=300&seq=asset-monitoring&orientation=landscape',
      features: [
        'Rastreo de maquinaria pesada',
        'Prevención de robo de activos',
        'Recuperación rápida de equipos',
        'Alertas de movimiento no autorizado',
        'Geolocalización en tiempo real'
      ]
    },
    // SEGURIDAD PERIMETRAL Y DE BIENES
    {
      id: 4,
      category: 'security',
      title: 'Circuito Cerrado de Televisión (CCTV) Inteligente',
      description: 'Sistema avanzado de videovigilancia con inteligencia artificial y reconocimiento facial.',
      icon: 'ri-camera-line',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20CCTV%20monitoring%20room%20with%20multiple%20high-resolution%20screens%20showing%20facial%20recognition%20software%2C%20professional%20security%20operators%2C%20intelligent%20video%20surveillance%20system%2C%20modern%20security%20control%20center%20with%20AI%20analytics%20displays&width=400&height=300&seq=cctv-intelligent&orientation=landscape',
      features: [
        'Videovigilancia local y remota',
        'Reconocimiento facial y de patentes vehiculares',
        'Analytics de comportamiento',
        'Detección inteligente de intrusos',
        'Verificación de alarmas con video'
      ]
    },
    {
      id: 5,
      category: 'security',
      title: 'Sistemas de Alarmas y Detección',
      description: 'Sistemas integrales de detección y alarmas con monitoreo continuo y protocolos de respuesta.',
      icon: 'ri-alarm-warning-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20alarm%20system%20control%20panel%20with%20multiple%20sensors%20and%20detection%20devices%2C%20professional%20security%20monitoring%20station%2C%20advanced%20perimeter%20security%20technology%2C%20fire%20and%20intrusion%20detection%20systems%2C%2024%2F7%20monitoring%20center&width=400&height=300&seq=alarm-detection-systems&orientation=landscape',
      features: [
        'Alarmas de intrusión perimetral',
        'Alarmas contra incendio e inundación',
        'Detección de fugas de gas',
        'Monitoreo 24/7 con verificación',
        'Protocolos de despacho automático'
      ]
    },
    // INVESTIGACIÓN Y FORENSE DIGITAL
    {
      id: 6,
      category: 'investigation',
      title: 'Auditoría de Movimientos',
      description: 'Análisis forense especializado de trazados GPS y patrones de movimiento para detectar anomalías.',
      icon: 'ri-route-line',
      image: 'https://readdy.ai/api/search-image?query=Digital%20forensics%20workstation%20with%20GPS%20tracking%20analysis%20software%2C%20professional%20investigator%20analyzing%20movement%20patterns%20on%20multiple%20monitors%2C%20advanced%20route%20audit%20system%2C%20forensic%20GPS%20data%20analysis%2C%20sophisticated%20tracking%20investigation%20tools&width=400&height=300&seq=movement-audit&orientation=landscape',
      features: [
        'Análisis forense de trazados GPS',
        'Detección de desvíos no autorizados',
        'Análisis de paradas y rutas ilógicas',
        'Cruce de datos de horarios',
        'Reportes detallados de actividad'
      ]
    },
    {
      id: 7,
      category: 'investigation',
      title: 'Auditoría de Accesos',
      description: 'Verificación y análisis forense de accesos físicos y lógicos con reportes de video especializados.',
      icon: 'ri-key-2-line',
      image: 'https://readdy.ai/api/search-image?query=Access%20control%20audit%20system%20with%20biometric%20scanners%20and%20video%20verification%2C%20professional%20security%20access%20monitoring%2C%20digital%20forensics%20workstation%20analyzing%20entry%20logs%2C%20advanced%20access%20control%20technology%2C%20security%20audit%20investigation%20room&width=400&height=300&seq=access-audit&orientation=landscape',
      features: [
        'Reportes de video para verificación',
        'Control de entradas y salidas de personal',
        'Auditoría de accesos lógicos',
        'Verificación de horarios de acceso',
        'Análisis forense de registros'
      ]
    },
    // INFRAESTRUCTURA
    {
      id: 8,
      category: 'infrastructure',
      title: 'Plataforma Tecnológica',
      description: 'Desarrollo y mantenimiento de software especializado para C4 y aplicaciones móviles de seguridad.',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20software%20development%20center%20with%20programmers%20working%20on%20security%20applications%2C%20C4%20platform%20development%2C%20mobile%20app%20interfaces%20for%20security%20monitoring%2C%20high-tech%20development%20environment%2C%20professional%20coding%20workspace%20for%20security%20software&width=400&height=300&seq=technology-platform&orientation=landscape',
      features: [
        'Desarrollo de software C4',
        'Aplicaciones móviles especializadas',
        'Interfaces de usuario avanzadas',
        'Integración de sistemas',
        'Actualizaciones continuas'
      ]
    },
    {
      id: 9,
      category: 'infrastructure',
      title: 'Servidores y Almacenamiento',
      description: 'Infraestructura robusta de servidores y almacenamiento seguro de datos para sistemas críticos.',
      icon: 'ri-server-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20data%20center%20with%20high-security%20servers%20and%20storage%20systems%2C%20professional%20server%20infrastructure%20for%20security%20data%2C%20advanced%20data%20storage%20facility%2C%20secure%20server%20room%20with%20monitoring%20systems%2C%20enterprise-grade%20server%20technology&width=400&height=300&seq=servers-storage&orientation=landscape',
      features: [
        'Servidores de alta disponibilidad',
        'Almacenamiento seguro de datos',
        'Respaldo automático de información',
        'Escalabilidad empresarial',
        'Seguridad de datos críticos'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleRequestInfo = () => {
    try {
      const whatsappNumber = '528992044798';
      const message = encodeURIComponent('Hola, me interesa obtener más información sobre los servicios de UIPSA.');
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp link:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20security%20services%20command%20center%20with%20multiple%20monitoring%20screens%2C%20professional%20security%20technology%20environment%2C%20satellite%20tracking%20systems%2C%20CCTV%20monitoring%20displays%2C%20sophisticated%20security%20operations%20facility%20with%20blue%20lighting&width=1920&height=600&seg=security-services-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
            Soluciones integrales de seguridad privada con tecnología de vanguardia
          </p>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg'
                    : 'bg-white text-blue-900 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://readdy.ai/api/search-image?query=Service%20placeholder%20image&width=400&height=300';
                    }}
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Características principales:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <i className="ri-check-line text-yellow-600 mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleRequestInfo}
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Solicitar Información
                    <i className="ri-whatsapp-line ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Categorías de Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros servicios están organizados en cuatro áreas principales de especialización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl mb-6 mx-auto">
                <i className="ri-satellite-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Monitoreo y Rastreo Satelital</h3>
              <p className="text-gray-600 text-sm">Control integral de flotillas, vehículos ejecutivos y activos</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-xl mb-6 mx-auto">
                <i className="ri-shield-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Seguridad Perimetral y de Bienes</h3>
              <p className="text-gray-600 text-sm">CCTV inteligente y sistemas de alarmas avanzados</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl mb-6 mx-auto">
                <i className="ri-search-eye-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Investigación y Forense Digital</h3>
              <p className="text-gray-600 text-sm">Auditorías especializadas de movimientos y accesos</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl mb-6 mx-auto">
                <i className="ri-server-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Infraestructura</h3>
              <p className="text-gray-600 text-sm">Plataformas tecnológicas y servidores de alta disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Proteger sus Activos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contáctenos hoy mismo para una consulta gratuita y descubra cómo nuestros servicios pueden fortalecer su seguridad
          </p>
          <button 
            onClick={handleRequestInfo}
            className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            Solicitar Información
            <i className="ri-whatsapp-line ml-2"></i>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
