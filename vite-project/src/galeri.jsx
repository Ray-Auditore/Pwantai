import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "./Footer";
import Header from "./Header";

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
      <Header />
      <br />
      <br />
      <motion.h2
        {...fadeInUp}
        className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center mb-12 md:mb-20"
      >
        Galeri Wisata Pantai Drini
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            {...fadeInUp}
            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer group"
            onClick={() => setSelectedImage(`/image/drini${i}.jpg`)}
          >
            <img
              src={`/image/drini${i}.jpg`}
              alt={`Pemandangan Pantai Drini ke-${i}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs sm:text-sm text-white font-medium">
              Pantai Drini {i}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full px-3 py-1 hover:bg-black"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <br />
      <br />
      <Footer />
    </div>
  );
}
