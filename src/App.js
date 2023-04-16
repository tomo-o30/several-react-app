import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [completeFlag, setCompleteFlag] = useState(false);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          completeFlag: completeFlag,
          text: todo.trim(),
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div>
      <div className="input-area">
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos
            .filter((todo) => todo.completeFlag === false)
            .map((todo) => (
              <>
                <li key={todo.id}>{todo.text}</li>
                <button>追加</button>
                <button>削除</button>
              </>
            ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos
            .filter((todo) => todo.completeFlag === true)
            .map((todo) => (
              <>
                <li key={todo.id}>{todo.text}</li>
                <button>追加</button>
                <button>削除</button>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
