import React from "react";
import CourseCard from "./pages/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    //Her zaman gelecek olanlar BrowserRouter altinda. Daha sonra tiklandiginda gelmesini istedigimiz componentler ise Routes kismi icerisinde. Yani cagirilan her bir componentte myNavbar ve Footer componentleri de gözüküyor olacak. Digerleri Cagirildikca gelir(Route ile cagiriyoruz.)
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
