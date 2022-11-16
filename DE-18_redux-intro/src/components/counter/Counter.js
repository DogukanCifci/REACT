import "./Counter.css";



const Counter = () => {
 
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
     
      <div>
        <button
          className="counter-button positive"
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
        >
          reset
        </button>
        <button
          className="counter-button negative"
        >
         AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
