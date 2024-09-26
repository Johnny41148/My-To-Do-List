import { useEffect, useState } from "react";
import "./todoStyle.css";
import Todos from "./Todos";

function TodoList() {
  const [titles, setTitle] = useState([]);
  const [newtitle, setNewtitel] = useState("");
  const [test, settest] = useState(false);
  const [timeEdit, settimeEdit] = useState(false);
  function inputrefresh(event) {
    setNewtitel(event.target.value);
  }
  function addText() {
    settest(true);
    if (newtitle.trim() !== "") {
      setTitle((t) => [...t, newtitle]);
      setNewtitel("");
      settest(false);
      settimeEdit(false);
    }
  }

  const deleteTodo = (lastdelete) => {
    const deleteitems = titles.filter((items) => items !== lastdelete);
    setTitle(deleteitems);
  };

  const taskComplete = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "complitList"
    );
  };

  const editTodo = (edittext) => {
    const deleteitems = titles.filter((items) => items !== edittext);
    setTitle(deleteitems);
    settimeEdit(true);
    for (let i = 0; i < titles.length; i++) {
      if (titles[i] == edittext) {
        setNewtitel(titles[i]);
      }
    }
  };

  return (
    <div className="Allfather">
      {test == true ? (
        <div className="no-text">
          please enter someting{" "}
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>
      ) : (
        <div></div>
      )}
      <div className="todolistbox">
        <h2>My To Do List</h2>
        <div className="textBox">
          <input
            className="textInput"
            type="text"
            placeholder="Titel..."
            value={newtitle}
            onChange={inputrefresh}
          />
          <button onClick={addText} className="addText">
            {timeEdit == true ? "EDIT" : "ADD"}
          </button>
        </div>
        <ul className="listText">
          {titles.map((title, index) => (
            <Todos
              key={index}
              title={title}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              taskComplete={taskComplete}
            />
          ))}
        </ul>
        {titles.length == 0 ? (
          <div className="no-job">you have nothing to do !</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default TodoList;
