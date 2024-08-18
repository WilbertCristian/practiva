import React from 'react';

const SearchBar = ({ onFilterTextChange }) => {
  const handleFilterTextChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'blue', padding: 10 }}>
      <label type="text" fontSize="12px">Filtro: </label>
      <input
        type="text"
        placeholder="Buscar..." 
        onChange={handleFilterTextChange}
      />
    </div>
  );
};

export default SearchBar;