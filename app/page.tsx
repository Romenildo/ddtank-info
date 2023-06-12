"use client";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/template/footer";
import Header from "./components/template/header";

import { Route, Routes } from "react-router-dom";
import CalenderContent from "./pages/calender";
import Main from "./pages/main";

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calender" element={<CalenderContent />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
