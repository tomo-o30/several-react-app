import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setId((prevId) => prevId + 1);
      setTodos([
        ...todos,
        {
          id,
          completeFlag: false,
          text: todo.trim(),
        },
      ]);
      console.log(todos);
      setTodo("");
    }
  };

  const handleComplete = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completeFlag: true };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleBeBack = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completeFlag: false };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
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
              <li className="todo-area" key={todo.id}>
                {todo.text}
                <button onClick={() => handleComplete(todo.id)}>完了</button>
                <button onClick={() => handleDelete(todo.id)}>削除</button>
              </li>
            ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos
            .filter((todo) => todo.completeFlag === true)
            .map((todo) => (
              <li className="todo-area" key={todo.id}>
                {todo.text}{" "}
                <button onClick={() => handleBeBack(todo.id)}>戻す</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
