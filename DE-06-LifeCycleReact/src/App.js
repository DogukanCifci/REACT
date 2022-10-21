//Lifecycle önemli maaekranda gözükmesini istemedigim icin yoruma aldim
// import LifeCycleMethods from "./component/LifeCycleMethods";
import "./App.css";
import Clock from "./component/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
function App() {
  const [goster, setGoster] = useState(true);
  // console.log(goster);
  return (
    <div className="container text-center mt-3">
      {goster && <Clock />}
      {/* veya goster {goster ? <Clock /> : ""} --> Bu sekilde ternary ile de yapabiliriz */}
      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        Göster
      </button>
    </div>
  );
}

export default App;
