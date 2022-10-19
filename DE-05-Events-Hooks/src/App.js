import Events from "./1-events-hooks-intro/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Counter from "./3-classComponents/Counter";
function App() {
  return (
    <div>
      <Events />
      <Hooks />
      <Counter />
      <Counter count={10} />
    </div>
  );
}

export default App;
