import { useState } from "react";
import AddBtn from "./AddBtn";

function ToDoBox() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  function getValue(e) {
    setValue(e.target.value);
  }
  function getTodo() {
    setTodos([...todos, value]);
    setValue("");
  }
  function deleteTodo(i) {
    let arr = [...todos];
    arr.splice(i, 1);
    setTodos(arr);
  }

  return (
    <div>
      <h1>To do app</h1>
      <input type="text" onChange={getValue} value={value} />
      {/* <button onClick={getTodo}>Add</button> */}
      <AddBtn name={"qurban"} age={30} getTodo={getTodo} />
      <ul>
        {todos.map((elem, i) => {
          return (
            <li key={i}>
              {elem}{" "}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoBox;
