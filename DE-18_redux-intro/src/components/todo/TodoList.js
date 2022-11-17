import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { temizle } from "../../redux/actions/todoActions";
const TodoList = () => {
  const gorevler1 = useSelector((state) => state.todoReducer.gorevler);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {gorevler1.map((item, idx) => {
          return <TodoItem key={idx} item={item} />;
        })}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button" onClick={() => dispatch(temizle())}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
