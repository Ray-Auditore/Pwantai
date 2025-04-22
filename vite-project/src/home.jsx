import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="mb-1">
        <Header />
      </div>

      <section
        className="rounded-lg relative h-[80vh] bg-cover bg-center w-auto"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di Pantai Indira
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Tempat kegiatan edukasi alam, rekreasi, dan pelatihan yang seru dan
            inspiratif.
          </p>
          <a
            href="#tiket"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white text-lg transition"
          >
            Pesan Tiket Sekarang
          </a>
        </div>
      </section>

      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Sejarah Pantai Indira
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Sejarah Pantai Drini ini dikisahkan oleh Mbah Mandung seorang sesepuh
          dan tokoh masyarakat yang berada di Pantai Drini. Dikisahkan, "Pada
          waktu itu Raja Majapahit beserta Ratu Selirnya di dalam pelarian
          kejaran musuh, singgah di wilayah Tanjung (sekarang kec. Tanjungsari),
          ditengah pelarian Raja dan Ratu selirnya terpisah dikarenakan adanya
          pengejaran dari pihak musuh pada waktu itu, sedangkan pada saat itu
          kondisi selir Raja sedang dalam keadaan hamil. kemudian Sang Ratu
          melanjutkan pelariannya ke arah selatan dan sampailah di Padukuhan
          Jambu. Sesampainya di Padukuhan Jambu Sang Ratu melahirkan namun
          sangat disayangkan, anak yang dilahirkan Sang Ratu tidak dapat
          diselamatkan kemudian dimakamkan di padukuhan Jambu hingga sampai saat
          ini tempat dimana anak Sang Ratu tersebut dikenal dengan sebutan
          "makam cilik".
        </p>
      </div>
    </>
  );
};

export default Home;
