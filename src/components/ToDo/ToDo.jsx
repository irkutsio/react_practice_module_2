import './ToDo.css';

export const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul>
    <h2>мой ToDo List</h2>
    {todos.map(({ id, text }) => (
      <li className="ToDoItem" key={id}>
        <p>{text}</p>
        <button onClick={()=>{onDeleteToDo(id)}}>Удалить заметку</button>
      </li>
    ))}
  </ul>
);
