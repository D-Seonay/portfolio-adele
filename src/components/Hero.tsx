import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Expert en<br />
              <span className="text-primary">Communication</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Spécialiste en stratégie de communication, relations publiques et marketing digital. Je transforme vos idées en messages percutants.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Me contacter
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Voir mon portfolio
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm">
                +50 clients satisfaits
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent">✨</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Expert certifié</p>
                  <p className="text-xs text-gray-500">Communication</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary">📈</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">+200%</p>
                  <p className="text-xs text-gray-500">Croissance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 