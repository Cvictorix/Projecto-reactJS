import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults({ searchText }) {
  return (
    <div className="EmptySearchResults-container">
      <p className="EmptySearchResults-p">
        No hay resultados para "{searchText}"
      </p>
    </div>
  );
}

export { EmptySearchResults };
