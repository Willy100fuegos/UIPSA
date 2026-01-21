
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    // Validar límite de caracteres en mensaje
    if (formData.mensaje.length > 500) {
      alert('El mensaje no puede exceder 500 caracteres');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d36q7dh8vlfrnhb0co4g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          servicio: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      details: ['+52 899 204 4798'],
      // Fixed broken string literal – the class should be "from-green-600 to-green-500"
      color: 'from-green-600 to-green-500'
    },
    {
      icon: 'ri-mail-line',
      title: 'Correo Electrónico',
      details: ['contacto@uipsa.mx'],
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Ubicación',
      details: [
        'David Alfaro Siqueiros 104',
        'Flor de Mayo, 66278 San Pedro Garza García, N.L.'
      ],
      color: 'from-blue-900 to-blue-800'
    },
    {
      icon: 'ri-time-line',
      title: 'Horarios',
      details: ['Lunes - Viernes: 8:00 - 18:00', 'Sábados: 9:00 - 14:00'],
      color: 'from-yellow-600 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20corporate%20contact%20center%20with%20professional%20customer%20service%20representatives%2C%20clean%20office%20environment%20with%20communication%20technology%2C%20multiple%20phone%20lines%20and%20computer%20workstations%2C%20sophisticated%20business%20facility&width=1920&height=600&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contacto</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200">
            Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos impulsar tu empresa
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${info.color} text-white rounded-xl mb-6 mx-auto`}>
                  <i className={`${info.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h2>
              <p className="text-xl text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-blue-900 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-blue-900 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+52 (55) 1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-blue-900 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-blue-900 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="automatizacion">Automatización Industrial</option>
                    <option value="calidad">Gestión de Calidad</option>
                    <option value="software">Desarrollo de Software</option>
                    <option value="mantenimiento">Mantenimiento Predictivo</option>
                    <option value="transformacion">Transformación Digital</option>
                    <option value="otro">Otro servicio</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-blue-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    required
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.mensaje.length}/500 caracteres
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <i className="ri-send-plane-line ml-2"></i>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-600 mr-2"></i>
                      <span className="text-green-800">
                        ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-600 mr-2"></i>
                      <span className="text-red-800">
                        Error al enviar el mensaje. Por favor intenta de nuevo.
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestra ubicación</h2>
              <p className="text-xl text-gray-600 mb-8">
                Visítanos en nuestras oficinas principales ubicadas en la zona industrial.
              </p>

              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.7!2d-100.3589!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866293c04b1c1111%3A0x222!2sDavid%20Alfaro%20Siqueiros%20104%2C%20Flor%20de%20Mayo%2C%2066278%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1ses!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación UIPSA"
                ></iframe>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Información adicional</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="ri-car-line text-blue-600"></i>
                    <span className="text-gray-600">Estacionamiento disponible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-wheelchair-line text-blue-600"></i>
                    <span className="text-gray-600">Acceso para personas con discapacidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-bus-line text-blue-600"></i>
                    <span className="text-gray-600">Transporte público cercano</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
