import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: 'twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'linkedin', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'instagram', icon: Instagram, href: 'https://instagram.com' },
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Communication Digitale', href: '#' },
        { name: 'Relations Publiques', href: '#' },
        { name: 'Marketing', href: '#' },
        { name: 'Gestion de Crise', href: '#' },
        { name: 'Content Marketing', href: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'Instagram', href: 'https://instagram.com' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
            Adèle <span className="text-accent">FAUTRAT</span>
            </a>
            <p className="text-gray-400 mb-6">
              Expert en communication digitale et relations publiques. Transformez votre présence en ligne avec des stratégies innovantes.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Adèle FAUTRAT. Tous droits réservés.
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Design et développé avec <Heart className="w-4 h-4 text-red-500 animate-pulse" /> par <a href="https://github.com/D-Seonay" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">Mathéo DELAUNAY</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 