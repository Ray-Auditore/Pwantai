import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="mb-1">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="rounded-lg relative h-[80vh] bg-cover bg-center w-auto"
        style={{ backgroundImage: "url('/image/Pantai-Drini.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          >
            Selamat Datang di Pantai Drini
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl"
          >
            Tempat kegiatan edukasi alam, rekreasi, dan pelatihan yang seru dan
            inspiratif.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            href="https://maps.app.goo.gl/9k3QfM9h6vRhEGDNA"
            className="bg-green-600 hover:bg-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-base sm:text-lg transition"
          >
            Menuju Lokasi Sekarang
          </motion.a>
        </div>
      </section>

      <br />
      <br />

      {/* Sejarah Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4 md:mb-6 md:leading-snug md:tracking-wide text-center">
          WELCOME TO PANTAI DRINI
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed md:max-w-2xl md:mx-auto">
          Pantai Drini terletak di desa Jambu, kecamatan Tanjungsari, kabupaten
          Gunungkidul, DIY. Pantai ini memiliki hamparan pasir putih yang luas
          dan suasana yang tenang, sehingga sangat cocok untuk bersantai dan
          menikmati keindahan alam. <br className="hidden md:block" />
          Di Pantai Drini Anda dapat melakukan berbagai kegiatan seperti
          berenang, berjemur, bermain volley, dan lain-lain. Juga terdapat
          fasilitas seperti gazebo dan tempat makan yang dapat Anda gunakan
          untuk beristirahat dan menikmati makanan.{" "}
          <br className="hidden md:block" />
          Jadi, tunggu apalagi? Mari datang dan menikmati keindahan Pantai Drini
          bersama-sama.
        </p>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
