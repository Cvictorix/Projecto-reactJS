import React from 'react';

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    // Usamos una función para actualizar el estado
    // para garantizar que siempre tengamos el valor anterior correcto y poder "togglear" el modal.
    setOpenModal(prevState => !prevState);

  };
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}>+</button>
  );
}

export { CreateTodoButton };