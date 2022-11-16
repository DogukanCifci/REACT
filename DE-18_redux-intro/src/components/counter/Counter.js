import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { arttir, azalt, reset } from "../../redux/actions/counterActions";

const Counter = () => {
  const dispatch1 = useDispatch();

  const count1 = useSelector((state) => state.counterReducer.counterSonuc);
  const text1 = useSelector((state) => state.counterReducer.text1);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count1}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch1(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch1(azalt())}
        >
          AZALT
        </button>
        <h1 style={{ textAlign: "center" }}>{text1}</h1>
      </div>
    </div>
  );
};

export default Counter;
