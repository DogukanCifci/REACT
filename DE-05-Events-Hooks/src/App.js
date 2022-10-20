import Events from "./1-events-hooks-intro/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Counter from "./3-classComponents/Counter";
import Form1 from "./form/Form1";
import Mousekeyboard from "./4-mouse-keyboard/Mousekeyboard";

function App() {
  return (
    <div>
      <Events />
      <Hooks />
      <Counter />
      <Counter sayi={10} />
      <Form1 />
      <Mousekeyboard />
    </div>
  );
}

export default App;
