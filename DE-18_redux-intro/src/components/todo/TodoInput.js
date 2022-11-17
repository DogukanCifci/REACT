import { ekle } from "../../redux/actions/todoActions";
import { useSelector, useDispatch } from "react-redux";
const TodoInput = () => {
  //REDUX DEGISKEN KISMI

  const dispatch = useDispatch();
  const gorevler1 = useSelector((state) => state.todoReducer.gorevler);

  //GONDERME FONKSIYONI
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(ekle(gorevler1.text));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        // value={text}
        onChange={(e) => (gorevler1.text = e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
