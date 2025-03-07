import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com",
      description: "Envoyez-moi un email pour toute question ou collaboration"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 6 00 00 00 00",
      link: "tel:+33600000000",
      description: "Appelez-moi pour une discussion directe"
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "Nantes, France",
      link: "https://maps.google.com",
      description: "Basée à Nantes, disponible pour des projets internationaux"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      content: "Lun-Ven, 9h-18h",
      description: "Horaires de bureau en France"
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'bg-blue-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      color: 'bg-sky-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: 'bg-pink-500',
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contactez-moi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de votre projet ou pour toute autre question.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                {card.link ? (
                  <a
                    href={card.link}
                    className="text-primary hover:text-accent transition-colors block mb-2"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-gray-600 mb-2">{card.content}</p>
                )}
                <p className="text-sm text-gray-500">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Suivez-moi sur les réseaux sociaux
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="w-8 h-8" />
                  </div>

                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 