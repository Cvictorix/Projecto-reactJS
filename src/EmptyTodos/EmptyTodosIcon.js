import React from 'react';

function EmptyTodosIcon() {
  return (
    <svg
      className="EmptyTodos-icon"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#888"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
      <path d="M10 14h4" />
      <path d="M12 12v4" />
    </svg>
  );
}

export { EmptyTodosIcon };