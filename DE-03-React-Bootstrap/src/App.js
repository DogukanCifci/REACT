import CourseCards from "./components/CourseCards.jsx";
import data from "./data.js"; //datayi buraya cekebilmek icin önce import etmemiz gerekiyor
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar1.jsx";
import Footer1 from "./components/Footer1.jsx";

function App() {
  return (
    <div>
      <Navbar1 />
      <CourseCards data1={data} />
      <Footer1 />
    </div>
  );
}

export default App;
