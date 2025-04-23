import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./home";
import Detail from "./detail";
import Galeri from "./galeri";
import Kontak from "./kontak";

export default function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Membungkus aplikasi dengan BrowserRouter */}
      {/* <Header /> */}
      <Routes>
        {/* Setiap Route di sini adalah bagian dari aplikasi */}
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );
}
