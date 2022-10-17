import "./App.scss";
import "./components/cards/Card.scss";
import Mycard from "./components/cards/Mycard";
import Myheader from "./components/header/Myheader";
import dataa from "./data";

function App() {
  return (
    <div>
      <Myheader />
      <Mycard data1={dataa} />
    </div>
  );
}

export default App;
