import "./App.scss";
import "./components/cards/Card.scss";
import Mycard from "./components/cards/Mycard";
import Myfooter from "./components/footer/Myfooter";
import Myheader from "./components/header/Myheader";
import dataa from "./data";

function App() {
  return (
    <div>
      <Myheader />
      <Mycard data1={dataa} />
      <Myfooter />
    </div>
  );
}

export default App;
