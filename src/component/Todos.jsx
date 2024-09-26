function Todos({ title, deleteTodo, editTodo, taskComplete }) {
  return (
    <li>
      <div className="jobTodo">{title}</div>
      <form action="">
        <label className="labelcheck">
          <input className="complit" type="checkbox" onChange={taskComplete} />
          <span className="checkmark"></span>
        </label>
        <i
          onClick={() => editTodo(title)}
          className="fa-regular fa-pen-to-square editicon"
        ></i>
        <i
          onClick={() => deleteTodo(title)}
          className="fa-solid fa-trash trashicon"
        ></i>
      </form>
    </li>
  );
}
export default Todos;
