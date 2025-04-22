import React from "react";

export default function Kontak() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Kontak & Lokasi</h2>

      {/* Bagian Alamat */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">📍 Alamat</h3>
        <p>
          Pantai Tropis, Jl. Laut Raya No.88, Desa Pantai Indah, Kecamatan
          Seaside, Provinsi Pantai Tropis.
        </p>
      </section>

      {/* Bagian Kontak */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">📞 Kontak</h3>
        <p>
          Email:{" "}
          <a href="mailto:info@pantaitropis.com" className="text-blue-600">
            info@pantaiDrini.com
          </a>
        </p>
        <p>
          Telepon:{" "}
          <a href="tel:+6281234567890" className="text-blue-600">
            +62 813-1676-6043 (abyan)
          </a>
        </p>
      </section>

      {/* Peta Lokasi - Gunakan iframe Google Maps */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">🌍 Peta Lokasi</h3>
        <div className="relative w-full" style={{ height: "400px" }}>
          <iframe
            title="Peta Pantai Tropis"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126028.5155274961!2d106.7143936!3d-6.2095959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcce4606a9d%3A0xd6c5b5c74edc7b89!2sPantai%20Tropis!5e0!3m2!1sid!2sid!4v1615441079927!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
