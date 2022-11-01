import React from "react";
import CourseCard from "./pages/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TeacherDetails from "./pages/TeacherDetails";
import CardDetails from "./pages/CardDetails";

const App = () => {
  return (
    //!!!Her zaman gelecek olanlar BrowserRouter altinda. Daha sonra tiklandiginda gelmesini istedigimiz componentler ise Routes kismi icerisinde. Yani cagirilan her bir componentte myNavbar ve Footer componentleri de gözüküyor olacak. Digerleri Cagirildikca gelir(Route ile cagiriyoruz.)
    //exact yazmamizin sebebi ana page oldugunu belli etmek.Eger onu en asagi yazarsak tek tek diger sayfalari kontrol ederken zaman kaybi olmasin diye onun ana yüklenecek sayfa oldugunu belirttik ve direk ona gitti
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          {/* Burda gelene degisken icin :degiskenName kullaniyoruz */}
          <Route path="/courses/:name" element={<CardDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
