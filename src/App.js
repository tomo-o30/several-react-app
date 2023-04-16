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

  const handleComplete = () => {};

  const handleDelete = (id) => {
    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // setTodos(newTodos);
  };

  const handleBeBack = (e) => {};

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
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={handleComplete}>完了</button>
                  <button onClick={handleDelete(todo.id)}>削除</button>
                </li>
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
                <button onClick={handleBeBack}>戻す</button>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
