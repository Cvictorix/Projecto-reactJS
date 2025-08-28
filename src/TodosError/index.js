import React from "react";
import './TodosError.css';

function TodosError() {
  return (
    <div className="error-container">
      <span className="error-text">Lo sentimos. Intenta mas tarde</span>
      <div className="error-spinner"></div>
    </div>
  );
}

export { TodosError };