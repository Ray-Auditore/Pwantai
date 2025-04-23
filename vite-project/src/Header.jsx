import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:flex-row flex-col">
        {/* Logo / Judul */}
        <div className="flex items-center gap-2 order-2 md:order-1">
          <img
            src="https://img.icons8.com/emoji/48/beach-with-umbrella.png"
            alt="Logo Pantai"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold tracking-wide">Wisata Pantai Drini</h1>
        </div>

        {/* Navigasi */}
        <nav className="space-x-6 text-lg order-1 md:order-2">
          <Link to="/" className="hover:text-yellow-300 transition">Beranda</Link>
          <Link to="/detail" className="hover:text-yellow-300 transition">Detail</Link>
          <Link to="/galeri" className="hover:text-yellow-300 transition">Galeri</Link>
          <Link to="/kontak" className="hover:text-yellow-300 transition">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}

