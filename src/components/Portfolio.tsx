import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "Campagne Digitale Eco-responsable",
    category: "Social Media",
    image: "/images/project1.jpg", // Placeholder
    description: "Stratégie social media pour une marque eco-responsable avec +150% d'engagement",
    tags: ["Instagram", "Facebook", "LinkedIn"],
  },
  {
    title: "Relations Presse Tech Startup",
    category: "RP",
    image: "/images/project2.jpg", // Placeholder
    description: "20+ articles de presse et 5 interviews TV pour une startup innovante",
    tags: ["Relations Presse", "Événementiel"],
  },
  {
    title: "Lancement Produit Innovant",
    category: "Marketing",
    image: "/images/project3.jpg", // Placeholder
    description: "Stratégie de lancement multicanal avec 200K€ de ventes en 3 mois",
    tags: ["Marketing", "Communication"],
  },
  {
    title: "Gestion de Crise Institutionnelle",
    category: "Crisis Com",
    image: "/images/project4.jpg", // Placeholder
    description: "Gestion et résolution d'une crise médiatique majeure",
    tags: ["Gestion de Crise", "RP"],
  },
  {
    title: "Content Marketing B2B",
    category: "Content",
    image: "/images/project5.jpg", // Placeholder
    description: "Stratégie de contenu générant +300% de leads qualifiés",
    tags: ["Content", "B2B"],
  },
  {
    title: "Influence Marketing Campaign",
    category: "Social Media",
    image: "/images/project6.jpg", // Placeholder
    description: "Collaboration avec 50+ influenceurs, 2M+ de reach",
    tags: ["Influence", "Social Media"],
  },
];

const categories = ["Tous", "Social Media", "RP", "Marketing", "Crisis Com", "Content"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === "Tous" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mon Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes projets les plus impactants en communication et marketing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                {/* Add actual image here */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 rounded-full text-white text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
          >
            Démarrer un projet ensemble
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 