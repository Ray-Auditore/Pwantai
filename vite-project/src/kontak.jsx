import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

export default function Kontak() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-blue-600 mb-4 md:mb-6 lg:mb-8"
        >
          Kontak & Lokasi
        </motion.h2>

        {/* Bagian Alamat */}
        <motion.section {...fadeInUp} className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            📍 Alamat
          </h3>
          <p className="md:text-lg lg:text-xl">
            Pantai Tropis, Jl. Laut Raya No.88, Desa Pantai Indah, Kecamatan
            Seaside, Provinsi Pantai Tropis.
          </p>
        </motion.section>

        {/* Bagian Kontak */}
        <motion.section {...fadeInUp} className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            📞 Kontak
          </h3>
          <p className="md:text-lg lg:text-xl">
            Email:{" "}
            <a
              href="mailto:info@pantaitropis.com"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              info@pantaitropis.com
            </a>
          </p>
          <p className="md:text-lg lg:text-xl">
            Telepon:{" "}
            <a
              href="tel:+6281234567890"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              +62 813-1676-6043 (Abyan)
            </a>
          </p>
        </motion.section>

        {/* Peta Lokasi */}
        <motion.section {...fadeInUp} className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            🌍 Peta Lokasi
          </h3>
          <div
            className="relative w-full"
            style={{ height: "400px", maxWidth: "100vw" }}
          >
            <iframe
              title="Peta Pantai Tropis"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126028.5155274961!2d106.7143936!3d-6.2095959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcce4606a9d%3A0xd6c5b5c74edc7b89!2sPantai%20Tropis!5e0!3m2!1sid!2sid!4v1615441079927!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}
