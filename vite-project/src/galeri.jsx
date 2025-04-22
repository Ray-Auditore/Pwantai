import React from 'react';

export default function Galeri() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Galeri Wisata Pantai</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Gambar 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+1"
            alt="Pantai 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 1
          </div>
        </div>

        {/* Gambar 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+2"
            alt="Pantai 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 2
          </div>
        </div>

        {/* Gambar 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+3"
            alt="Pantai 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 3
          </div>
        </div>

        {/* Gambar 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+4"
            alt="Pantai 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 4
          </div>
        </div>

        {/* Gambar 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+5"
            alt="Pantai 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 5
          </div>
        </div>

        {/* Gambar 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/600x400?text=Pantai+6"
            alt="Pantai 6"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 text-sm">
            Pantai Indah 6
          </div>
        </div>
      </div>
    </div>
  );
}
