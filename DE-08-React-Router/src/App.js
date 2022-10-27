import React from "react";
import CourseCard from "./pages/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <ContactForm />
      <CourseCard />
      <Teacher />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
