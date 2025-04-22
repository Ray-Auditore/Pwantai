import React from "react";

export default function Detail() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Detail Wisata Pantai Indira
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📝 Sejarah</h3>
        <p>
          Pantai Indira adalah destinasi alam yang menakjubkan, dengan pasir
          putih yang lembut, air laut yang jernih berwarna turquoise, dan
          vegetasi tropis yang subur. Secara umum, pantai tropis ditemukan di
          daerah sekitar garis khatulistiwa, yang mencakup kawasan seperti Asia
          Tenggara, Karibia, Pasifik Selatan, dan pantai-pantai tropis di
          Amerika Selatan dan Afrika.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛟 Fasilitas</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Gazebo dan tempat duduk santai</li>
          <li>Toilet dan kamar bilas</li>
          <li>Tempat makan dan café pantai</li>
          <li>Penyewaan papan selancar & ban renang</li>
          <li>Area parkir luas dan aman</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🎫 Harga Tiket</h3>
        <p>Harga tiket masuk sangat terjangkau:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Dewasa: Rp 15.000</li>
          <li>Anak-anak: Rp 10.000</li>
          <li>Parkir motor: Rp 3.000</li>
          <li>Parkir mobil: Rp 5.000</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🕘 Jam Operasional</h3>
        <p>Pantai buka setiap hari:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Senin - Jumat: 07.00 - 18.00 WIB</li>
          <li>Sabtu & Minggu: 06.00 - 19.00 WIB</li>
        </ul>
      </section>
    </div>
  );
}
