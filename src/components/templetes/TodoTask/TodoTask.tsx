import { ChangeEvent, useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
import "./TodoTask.css";

interface Todo {
  id: number;
  completeFlag: boolean;
  text: string;
  todoState: string;
}

const TodoTask = () => {
  // todoアイテム全体
  const [todos, setTodos] = useState<Todo[]>([]);
  // 表示する未完了のtodoアイテム
  const [displayUndoneTodos, setDisplayUndoneTodos] = useState<Todo[]>([]);
  // 表示する完了のtodoアイテム
  const [displayDoneTodos, setDisplayDoneTodos] = useState<Todo[]>([]);
  // 個々のtodoアイテム
  const [todo, setTodo] = useState("");
  // filter用のセレクトボックスのstate
  const [todoFilterState, setTodoFilterState] = useState("all");
  // 編集中かどうかを判断するflag
  const [isChangingFlag, setIsChangingFlag] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    switch (todoFilterState) {
      case "all":
        setDisplayUndoneTodos(
          todos.filter((todo) => {
            return todo.completeFlag === false;
          })
        );
        setDisplayDoneTodos(
          todos.filter((todo) => {
            return todo.completeFlag === true;
          })
        );
        break;
      case "notStarted":
        setDisplayUndoneTodos(
          todos.filter((todo) => {
            return (
              todo.todoState === "notStarted" && todo.completeFlag === false
            );
          })
        );
        setDisplayDoneTodos([]);
        break;
      case "working":
        setDisplayUndoneTodos(
          todos.filter((todo) => {
            return todo.todoState === "working" && todo.completeFlag === false;
          })
        );
        setDisplayDoneTodos([]);
        break;
      default:
        console.log(todoFilterState, "は無効な値です。");
        break;
    }
  }, [todoFilterState, todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleCompleteToChangeText = () => {
    // TODO 編集完了のボタンをクリックしたら、inputの中身を空にする
    console.log(todo);

    setIsChangingFlag(false);
  };

  const handleAddButtonClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
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
          todoState: "notStarted",
        },
      ]);
      setTodo("");
    }
  };

  const handleChangeText = (todo: Todo) => {
    setIsChangingFlag(true);
    // TODO 編集のボタンをクリックしたら、inputのvalueをtodoにする。
    setId(todo.id);
  };

  const handleComplete = (id: number) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completeFlag: true };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleBeBack = (id: number) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completeFlag: false };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleTodoStateChange = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number
  ): void => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoState: e.target.value };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleFilterStateChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTodoFilterState(e.target.value);
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
        {isChangingFlag ? (
          <>
            <Button
              onClick={() => handleCompleteToChangeText()}
              text="編集完了"
            />
          </>
        ) : (
          <>
            <Button onClick={(e) => handleAddButtonClick(e)} text="追加" />
            <select
              value={todoFilterState}
              onChange={(e) => handleFilterStateChange(e)}
              id="todo-state"
            >
              <option value="all">全て</option>
              <option value="notStarted">未着手</option>
              <option value="working">作業中</option>
            </select>
          </>
        )}
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {displayUndoneTodos.map((todo) => (
            <li className="todo-area" key={todo.id}>
              {todo.text}
              <select
                onChange={(e) => handleTodoStateChange(e, todo.id)}
                id="todo-state"
              >
                <option value="notStarted">未着手</option>
                <option value="working">作業中</option>
              </select>
              <Button onClick={() => handleChangeText(todo)} text="編集" />
              <Button onClick={() => handleComplete(todo.id)} text="完了" />
              <Button onClick={() => handleDelete(todo.id)} text="削除" />
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {displayDoneTodos.map((todo) => (
            <li className="todo-area" key={todo.id}>
              {todo.text}{" "}
              <Button onClick={() => handleBeBack(todo.id)} text="戻す" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoTask;
