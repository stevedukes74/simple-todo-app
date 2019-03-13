import React from 'react';
// import Delete from '@material-ui/icons/Delete';
// import Done from '@material-ui/icons/Done';
// import Undo from '@material-ui/icons/Undo';

/**
 * This is a pure function that returns jsx for the list of todos
 * @param {*} todos array all the todos to be listed
 * @param handleToggle func toggles the todo state from completed to not completed
 * @param handleDelete func deletes a todo from the list
 */
const Todos = ({
  todos,
  handleToggle,
  handleDelete
}) => (
  <div className="todos-container">
    {todos.map((todo, i) => (
      <div key={todo.id.toString()} className={`todo-row ${(i + 1) % 2 === 0 ? 'even' : ''}`}>
        <div className={`todos ${todo.completed ? 'done' : ''}`}>{`${i + 1}. ${todo.text}`}</div>
        <div className="todo-button">
          <button onClick={() => handleToggle(todo.id)}>
            {!todo.completed ? 'Done' : 'Undo'}
          </button>
        </div>
        <button className="todo-button" onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default Todos;