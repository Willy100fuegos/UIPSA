
import { Link } from 'react-router-dom';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Home() {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Certificaciones',
      description: 'Acreditaciones internacionales que garantizan la calidad de nuestros servicios'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovación',
      description: 'Soluciones tecnológicas avanzadas adaptadas a las necesidades del mercado'
    },
    {
      icon: 'ri-team-line',
      title: 'Experiencia',
      description: 'Equipo de profesionales altamente capacitados con años de experiencia'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Soporte 24/7',
      description: 'Atención personalizada y soporte técnico disponible las 24 horas'
    }
  ];

  const stats = [
    { number: '500+', label: 'Proyectos Completados' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '200+', label: 'Clientes Satisfechos' },
    { number: '99%', label: 'Tasa de Éxito' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20private%20security%20surveillance%20center%20with%20advanced%20monitoring%20technology%2C%20modern%20CCTV%20control%20room%20with%20multiple%20screens%20displaying%20security%20feeds%2C%20sophisticated%20security%20equipment%2C%20blue%20ambient%20lighting%2C%20high-tech%20security%20operations%20center%20with%20professional%20security%20personnel%2C%20state-of-the-art%20surveillance%20technology%2C%20dark%20blue%20color%20scheme%20with%20metallic%20accents&width=1920&height=1080&seq=security-tech-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                Soluciones Tecnológicas
                <span className="block text-yellow-400">de Vanguardia</span>
              </h2>
              
              <p className="text-xl text-gray-200 max-w-2xl">
                Lideramos la innovación en servicios industriales y tecnológicos, ofreciendo soluciones integrales 
                que impulsan el crecimiento y la eficiencia de tu empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/servicios">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Conocer Servicios
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900">
                    Contactar Ahora
                    <i className="ri-phone-line ml-2"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </section>

      {/* Technology Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Tecnología de Seguridad Avanzada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementamos las más innovadoras soluciones tecnológicas para garantizar la máxima protección y eficiencia en nuestros servicios de seguridad privada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Sistemas de Monitoreo Inteligente
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros centros de control utilizan tecnología de vanguardia con inteligencia artificial y análisis predictivo para detectar amenazas en tiempo real. Sistemas integrados de videovigilancia, sensores y alertas automáticas que garantizan una respuesta inmediata ante cualquier incidente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Monitoreo 24/7 con IA avanzada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Análisis predictivo de comportamientos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Respuesta automatizada ante emergencias</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20high-tech%20security%20control%20room%20with%20multiple%20large%20screens%20displaying%20surveillance%20feeds%2C%20professional%20security%20operators%20monitoring%20systems%2C%20advanced%20CCTV%20technology%2C%20blue%20ambient%20lighting%2C%20sophisticated%20monitoring%20equipment%2C%20state-of-the-art%20security%20operations%20center%20with%20wall%20of%20monitors%2C%20futuristic%20security%20technology%20setup&width=600&height=450&seq=monitoring-tech&orientation=landscape"
                  alt="Sistema de Monitoreo Inteligente"
                  className="rounded-2xl shadow-2xl object-cover w-full h-80"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl flex items-center justify-center shadow-xl">
                  <i className="ri-eye-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20biometric%20security%20access%20control%20system%20with%20fingerprint%20scanner%2C%20facial%20recognition%20technology%2C%20modern%20security%20entrance%20with%20electronic%20locks%2C%20high-tech%20access%20control%20panel%2C%20professional%20security%20technology%2C%20sophisticated%20identification%20systems%2C%20blue%20and%20metallic%20design%20elements%2C%20cutting-edge%20security%20hardware&width=600&height=450&seq=biometric-security&orientation=landscape"
                  alt="Control de Acceso Biométrico"
                  className="rounded-2xl shadow-2xl object-cover w-full h-80"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-xl">
                  <i className="ri-fingerprint-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Control de Acceso Biométrico
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Implementamos sistemas de identificación biométrica de última generación que incluyen reconocimiento facial, huella dactilar y análisis de iris. Nuestras soluciones garantizan un control de acceso seguro y eficiente, eliminando riesgos de suplantación de identidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-yellow-600 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Reconocimiento facial avanzado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-yellow-600 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Sistemas de huella dactilar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-yellow-600 text-white rounded-full">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span className="text-gray-700">Base de datos integrada y segura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              ¿Por qué elegir UIPSA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos experiencia, tecnología y compromiso para ofrecer soluciones 
              excepcionales que superan las expectativas de nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl mb-6 group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-300">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Contáctanos hoy y descubre cómo nuestras soluciones tecnológicas 
            pueden impulsar el crecimiento de tu negocio.
          </p>
          <Link to="/contacto">
            <Button variant="secondary" size="lg">
              Comenzar Ahora
              <i className="ri-rocket-line ml-2"></i>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
