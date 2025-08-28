import React from 'react';
import { EmptyTodosIcon } from './EmptyTodosIcon';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <EmptyTodosIcon />
      <p>¡Crea tu primer TODO!</p>
    </div>
  );
}

export { EmptyTodos };