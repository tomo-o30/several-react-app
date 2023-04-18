import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

interface Todo {
  id: number;
  completeFlag: boolean;
  text: string;
}

const App = ()=> {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleButtonClick = (e?:React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

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

  const handleComplete = (id:number) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completeFlag: true };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id:number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleBeBack = (id:number) => {
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
        <Button onClick={(e)=>handleButtonClick(e)} text='追加' />
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos
            .filter((todo) => todo.completeFlag === false)
            .map((todo) => (
              <li className="todo-area" key={todo.id}>
                {todo.text}
                <Button onClick={() => handleComplete(todo.id)} text='完了'/>
                <Button onClick={() => handleDelete(todo.id)} text='削除'/>
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
                <Button onClick={() => handleBeBack(todo.id)} text='戻す'/>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
