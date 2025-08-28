import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim().length <= 0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Nueva tarea</h2>
      <textarea
        placeholder="Escribe tu nueva tarea aquí..."
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-categoryContainer">
        <label>Categoría</label>
        <select disabled>
          <option value="general">General</option>
        </select>
      </div>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

