import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "Portfolio Personnel",
    category: "Personal",
    image: "/images/project1.jpg",
    description: "Création d'un portfolio personnel avec React et Framer Motion",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Stage Communication Digitale",
    category: "Stage",
    image: "/images/project2.jpg",
    description: "Stage en communication digitale chez une startup tech",
    tags: ["Social Media", "Content Creation"],
  },
  {
    title: "Projet de Gestion de Crise",
    category: "Cours",
    image: "/images/project3.jpg",
    description: "Simulation de gestion de crise médiatique",
    tags: ["Crisis Management", "RP"],
  },
  {
    title: "Blog Personnel",
    category: "Personal",
    image: "/images/project4.jpg",
    description: "Blog sur la communication et le marketing digital",
    tags: ["Content", "Blogging"],
  },
  {
    title: "Stage RP",
    category: "Stage",
    image: "/images/project5.jpg",
    description: "Stage en relations presse dans une agence",
    tags: ["RP", "Media Relations"],
  },
  {
    title: "Projet Marketing Digital",
    category: "Cours",
    image: "/images/project6.jpg",
    description: "Projet de stratégie marketing digital",
    tags: ["Digital Marketing", "Strategy"],
  },
];

const categories = ["Tous", "Personal", "Stage", "Cours"];

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
                <div className="absolute bg-gray-200" />
                {/* Add actual image here */}
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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