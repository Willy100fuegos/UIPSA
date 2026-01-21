
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function About() {
  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Honestidad',
      description: 'Actuamos con transparencia y sinceridad en todas nuestras relaciones profesionales y comerciales.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Confianza',
      description: 'Construimos relaciones sólidas basadas en la credibilidad y la seguridad que brindamos a nuestros clientes.'
    },
    {
      icon: 'ri-award-line',
      title: 'Profesionalismo',
      description: 'Mantenemos los más altos estándares de calidad y excelencia en todos nuestros servicios de seguridad.'
    },
    {
      icon: 'ri-time-line',
      title: 'Respuesta Rápida',
      description: 'Garantizamos tiempos de respuesta inmediatos ante cualquier situación o emergencia de seguridad.'
    },
    {
      icon: 'ri-team-line',
      title: 'Cooperación',
      description: 'Trabajamos en equipo con nuestros clientes para desarrollar soluciones de seguridad efectivas y personalizadas.'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Capacitación',
      description: 'Invertimos continuamente en la formación y certificación de nuestro personal especializado.'
    }
  ];

  const team = [
    {
      name: 'Carlos Mendoza',
      position: 'Director General',
      image: 'https://readdy.ai/api/search-image?query=Professional%20security%20executive%20in%20modern%20office%20environment%2C%20wearing%20dark%20suit%2C%20confident%20leadership%20pose%2C%20corporate%20portrait%20style%2C%20professional%20lighting%2C%20clean%20background%20with%20security%20elements%2C%20mature%20businessman%20with%20experience%20in%20private%20security%20industry&width=300&height=300&seq=ceo-carlos&orientation=squarish'
    },
    {
      name: 'Ana García',
      position: 'Directora de Operaciones',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20security%20operations%20director%20in%20modern%20corporate%20setting%2C%20business%20attire%2C%20confident%20professional%20pose%2C%20clean%20office%20background%20with%20security%20monitoring%20elements%2C%20executive%20portrait%20style%2C%20sophisticated%20lighting&width=300&height=300&seq=coo-ana&orientation=squarish'
    },
    {
      name: 'Miguel Rodríguez',
      position: 'Director de Capacitación',
      image: 'https://readdy.ai/api/search-image?query=Professional%20training%20director%20in%20security%20corporate%20environment%2C%20business%20formal%20attire%2C%20confident%20stance%2C%20modern%20training%20facility%20background%20with%20educational%20elements%2C%20executive%20portrait%20photography%20style&width=300&height=300&seq=training-miguel&orientation=squarish'
    },
    {
      name: 'Laura Fernández',
      position: 'Directora de Riesgos',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20risk%20management%20director%20in%20clean%20corporate%20environment%2C%20business%20professional%20attire%2C%20confident%20executive%20pose%2C%20modern%20office%20setting%20with%20security%20risk%20assessment%20elements%20in%20background&width=300&height=300&seq=risk-laura&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20security%20operations%20center%20with%20advanced%20surveillance%20technology%2C%20professional%20security%20environment%2C%20multiple%20monitor%20displays%2C%20dark%20blue%20and%20gold%20lighting%20accents%2C%20sophisticated%20security%20headquarters%20design%2C%20high-tech%20control%20room%20with%20security%20personnel&width=1920&height=600&seq=security-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            UIPSA | UNIDAD DE INTELIGENCIA Y PROTECCIÓN
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
            Expertos globales en la provisión de soluciones de seguridad privada
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                LA EMPRESA
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Expertos globales en la provisión de soluciones de seguridad privada.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-gray-600">Clientes Protegidos</div>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20private%20security%20facility%20interior%20with%20advanced%20surveillance%20equipment%2C%20professional%20security%20environment%2C%20blue%20and%20metallic%20color%20scheme%2C%20sophisticated%20monitoring%20systems%2C%20high-tech%20security%20control%20room%2C%20professional%20security%20operations%20photography&width=600&height=500&seq=security-facility&orientation=landscape"
                alt="Instalaciones UIPSA"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-xl">
                <i className="ri-shield-check-line text-4xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl mb-6">
                <i className="ri-target-line text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">MISIÓN</h3>
              <p className="text-gray-600 text-lg">
                Ofrecer una amplia gama de soluciones de seguridad personalizadas y diseñadas para el servicio y satisfacción de cualquier tipo de organización, incluyendo la protección de bienes, eventos, gestión de riesgos, vigilancia electrónica y consultoría de alto nivel. Proteger los puntos de interés, personales y de grupos, traslados ejecutivos y de valores para satisfacer los más amplios requerimientos y necesidades de nuestros clientes.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-xl mb-6">
                <i className="ri-eye-line text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">VISIÓN</h3>
              <p className="text-gray-600 text-lg">
                Proyectarnos como un centro de especialización en seguridad privada, con el reconocimiento del sector empresarial y de la sociedad a través de nuestros egresados. Consolidar nuestro liderazgo en territorio nacional con técnicas y tecnologías de punta en materia de seguridad.
              </p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl mb-6">
                <i className="ri-handshake-line text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">COMPROMISO</h3>
              <p className="text-gray-600 text-lg">
                A través de nuestros servicios de alto nivel, fortalecemos las relaciones con nuestros clientes, proveedores y personal de nuestra empresa a través de un estricto código de ética y valores.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-5 text-white rounded-xl mb-6">
                <i className="ri-medal-line text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">PERSONAL CAPACITADO Y CERTIFICADO</h3>
              <p className="text-gray-600 text-lg">
                Operamos con acreditaciones y registros de las instituciones que validan nuestra formación, garantizando el nivel de preparación de nuestros egresados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              VALORES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honestidad, confianza, confiabilidad, profesionalismo, respuesta rápida, cooperación y capacitación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl mb-6 mx-auto group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-300 group-hover:scale-110">
                  <i className={`${value.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
