
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Certifications() {
  const certificationCategories = [
    {
      id: 1,
      title: 'Protección VIP',
      icon: 'ri-shield-user-line',
      color: 'from-blue-900 to-blue-800',
      image: 'https://readdy.ai/api/search-image?query=VIP%20executive%20protection%20security%20service%20with%20professional%20bodyguards%20in%20suits%2C%20luxury%20vehicle%20security%20detail%2C%20high-end%20personal%20protection%20environment%2C%20sophisticated%20executive%20security%20operations&width=400&height=300&seq=vip-protection&orientation=landscape',
      solutions: [
        'Seguridad Ejecutiva, custodia, defensa de la vida e integridad personal',
        'Protección de bienes, dinero y otros activos',
        'Servicios personalizados'
      ],
      training: [
        'Vigilancia presencial de bienes y personas (EC0060)',
        'Seguridad a personas, defensa de la vida e integridad personal',
        'Capacitación en materia de protección civil'
      ],
      certification: 'EC0060 - Vigilancia presencial de bienes y personas'
    },
    {
      id: 2,
      title: 'Seguridad Privada en los Bienes',
      icon: 'ri-building-2-line',
      color: 'from-yellow-600 to-yellow-500',
      image: 'https://readdy.ai/api/search-image?query=Private%20security%20guards%20protecting%20commercial%20buildings%20and%20properties%2C%20professional%20security%20personnel%20with%20guard%20dogs%2C%20corporate%20facility%20security%2C%20industrial%20property%20protection%20services&width=400&height=300&seq=property-security&orientation=landscape',
      solutions: [
        'Seguridad con apoyo de canes',
        'Custodia y protección de bienes muebles e inmuebles (intramuros y patrimonial)',
        'Servicios a corporativos, industrias, residenciales y sector salud'
      ],
      training: [
        'Vigilancia presencial de bienes y personas (EC0060)',
        'Prevención de pérdidas (CTPAT & OEA)',
        'Capacitación en materia de protección civil'
      ],
      certification: 'EC0060 - Vigilancia presencial de bienes y personas'
    },
    {
      id: 3,
      title: 'Seguridad Privada en Traslados de Bienes y Valores',
      icon: 'ri-truck-line',
      color: 'from-green-600 to-green-500',
      image: 'https://readdy.ai/api/search-image?query=Armored%20vehicle%20money%20transport%20security%2C%20professional%20cash-in-transit%20services%2C%20bank%20security%20transport%2C%20valuable%20goods%20custody%20and%20transportation%20with%20armed%20guards&width=400&height=300&seq=money-transport&orientation=landscape',
      solutions: [
        'Personal altamente entrenado para apoyo a instituciones bancarias y monetarias',
        'Custodia para transportes y mercancías',
        'Servicios especializados para el sector financiero'
      ],
      training: [
        'Traslado seguro de valores y efectivo',
        'Protocolos de seguridad bancaria',
        'Manejo de situaciones de alto riesgo'
      ],
      certification: 'Certificación especializada en traslado de valores'
    }
  ];

  const credentials = [
    {
      title: 'STPS',
      description: 'Secretaría del Trabajo y Previsión Social',
      icon: 'ri-government-line'
    },
    {
      title: 'SEP/CONOCER',
      description: 'Consejo Nacional de Normalización y Certificación',
      icon: 'ri-award-line'
    },
    {
      title: 'Protección Civil',
      description: 'Capacitación oficial en protección civil',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'CTPAT & OEA',
      description: 'Prevención de pérdidas certificada',
      icon: 'ri-lock-line'
    }
  ];

  const handleRequestInfo = () => {
    const whatsappNumber = '528992044798';
    const message = encodeURIComponent('Hola, me interesa obtener más información sobre las certificaciones y servicios de UIPSA.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20security%20certification%20training%20facility%20with%20certificates%20and%20awards%20on%20walls%2C%20security%20training%20academy%20environment%2C%20official%20certification%20documents%20and%20professional%20accreditation%20displays&width=1920&height=600&seq=certifications-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Certificaciones y Capacitaciones
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
            Personal certificado y capacitado para brindar servicios de seguridad privada de la más alta calidad
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Nuestras Especializaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres áreas principales de certificación que garantizan servicios profesionales de seguridad privada
            </p>
          </div>
          
          <div className="space-y-16">
            {certificationCategories.map(category => (
              <div key={category.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className={`absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-gradient-to-r ${category.color} text-white rounded-xl shadow-lg`}>
                      <i className={`${category.icon} text-2xl`}></i>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl font-bold text-blue-900 mb-6">
                      {category.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                          <i className="ri-settings-line text-yellow-600 mr-2"></i>
                          Soluciones
                        </h4>
                        <ul className="space-y-2">
                          {category.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <i className="ri-check-line text-yellow-600 mt-0.5 flex-shrink-0"></i>
                              <span className="text-gray-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                          <i className="ri-graduation-cap-line text-yellow-600 mr-2"></i>
                          Capacitación STPS
                        </h4>
                        <ul className="space-y-2">
                          {category.training.map((training, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <i className="ri-arrow-right-s-line text-blue-600 mt-0.5 flex-shrink-0"></i>
                              <span className="text-gray-600">{training}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-4 rounded-xl">
                        <h4 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                          <i className="ri-certificate-line text-yellow-600 mr-2"></i>
                          Certificación SEP/CONOCER
                        </h4>
                        <p className="text-blue-800 font-medium">{category.certification}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleRequestInfo}
                      className={`mt-8 bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl`}
                    >
                      Solicitar Información
                      <i className="ri-whatsapp-line ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Instituciones Certificadoras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respaldados por las principales instituciones oficiales de México
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl mb-6 mx-auto">
                  <i className={`${credential.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {credential.title}
                </h3>
                <p className="text-gray-600">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EC0060 Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 text-blue-900 rounded-2xl mb-6 mx-auto">
                <i className="ri-medal-line text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Certificación EC0060
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Estándar de competencia en vigilancia presencial de bienes y personas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-blue-800/50 p-8 rounded-2xl">
                <i className="ri-eye-line text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Vigilancia Profesional</h3>
                <p className="text-gray-200">Técnicas avanzadas de observación y vigilancia</p>
              </div>
              
              <div className="bg-blue-800/50 p-8 rounded-2xl">
                <i className="ri-shield-check-line text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Protección Integral</h3>
                <p className="text-gray-200">Defensa de bienes y personas con protocolos certificados</p>
              </div>
              
              <div className="bg-blue-800/50 p-8 rounded-2xl">
                <i className="ri-alert-line text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Respuesta Inmediata</h3>
                <p className="text-gray-200">Capacitación en situaciones de emergencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              ¿Por qué elegir personal certificado?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las ventajas de trabajar con profesionales certificados y capacitados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-2xl mb-6 mx-auto group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300 group-hover:scale-110">
                <i className="ri-checkbox-circle-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Garantía de Calidad
              </h3>
              <p className="text-gray-600">
                Personal certificado que cumple con estándares nacionales de competencia
              </p>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-2xl mb-6 mx-auto group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300 group-hover:scale-110">
                <i className="ri-shield-star-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Profesionalismo
              </h3>
              <p className="text-gray-600">
                Capacitación continua y actualización en técnicas de seguridad
              </p>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-2xl mb-6 mx-auto group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300 group-hover:scale-110">
                <i className="ri-service-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Confiabilidad
              </h3>
              <p className="text-gray-600">
                Servicios respaldados por certificaciones oficiales reconocidas
              </p>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-2xl mb-6 mx-auto group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300 group-hover:scale-110">
                <i className="ri-24-hours-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Disponibilidad
              </h3>
              <p className="text-gray-600">
                Servicios disponibles las 24 horas con personal altamente capacitado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-xl">Especializaciones Principales</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-xl">Personal Certificado</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">EC0060</div>
              <div className="text-xl">Certificación Oficial</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-xl">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
