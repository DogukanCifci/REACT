import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";
import { Provider } from "react-redux";
function App() {
  const topluReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer,
  });

  const store = createStore(topluReducer);

  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
