import CourseCards from "./components/CourseCards.jsx";
import data from "./data.js"; //datayi buraya cekebilmek icin önce import etmemiz gerekiyor
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <CourseCards data1={data} />
    </div>
  );
}

export default App;
