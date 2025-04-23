import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Detail() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-24">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-blue-600 mb-4 md:mb-6 lg:mb-8"
        >
          Detail Wisata Pantai Drini
        </motion.h2>

        <motion.section {...fadeInUp} className="mb-6 md:mb-8 lg:mb-10">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            Sejarah
          </h3>
          <p className="md:text-lg lg:text-xl">
            Sejarah Pantai Drini ini dikisahkan oleh Mbah Mandung seorang
            sesepuh dan tokoh masyarakat yang berada di Pantai Drini.
            Dikisahkan, "Pada waktu itu Raja Majapahit beserta Ratu Selirnya di
            dalam pelarian kejaran musuh, singgah di wilayah Tanjung (sekarang
            kec. Tanjungsari), ditengah pelarian Raja dan Ratu selirnya terpisah
            dikarenakan adanya pengejaran dari pihak musuh pada waktu itu,
            sedangkan pada saat itu kondisi selir Raja sedang dalam keadaan
            hamil. kemudian Sang Ratu melanjutkan pelariannya ke arah selatan
            dan sampailah di Padukuhan Jambu. Sesampainya di Padukuhan Jambu
            Sang Ratu melahirkan namun sangat disayangkan, anak yang dilahirkan
            Sang Ratu tidak dapat diselamatkan kemudian dimakamkan di padukuhan
            Jambu hingga sampai saat ini tempat dimana anak Sang Ratu tersebut
            dikenal dengan sebutan "makam cilik".
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-6 md:mb-8 lg:mb-10">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            Fasilitas
          </h3>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 lg:space-y-3">
            <li>Gazebo dan tempat duduk santai</li>
            <li>Toilet dan kamar bilas</li>
            <li>Tempat makan dan café pantai</li>
            <li>Penyewaan papan selancar & ban renang</li>
            <li>Area parkir luas dan aman</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-6 md:mb-8 lg:mb-10">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            Harga Tiket
          </h3>
          <p className="md:text-lg lg:text-xl">
            Harga tiket masuk sangat terjangkau:
          </p>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 lg:space-y-3">
            <li>Dewasa: Rp 15.000</li>
            <li>Anak-anak: Rp 10.000</li>
            <li>Parkir motor: Rp 3.000</li>
            <li>Parkir mobil: Rp 5.000</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-6 md:mb-8 lg:mb-10">
          <h3 className="text-xl font-semibold mb-2 md:mb-3 lg:mb-4">
            Jam Operasional
          </h3>
          <p className="md:text-lg lg:text-xl">Pantai buka setiap hari:</p>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 lg:space-y-3">
            <li>Senin - Jumat: 07.00 - 18.00 WIB</li>
            <li>Sabtu & Minggu: 06.00 - 19.00 WIB</li>
          </ul>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}
