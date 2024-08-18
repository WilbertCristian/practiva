import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <SearchBar onFilterTextChange={setFilterText} />
      <ProductTable filterText={filterText} />
    </div>
  );
};

export default FilterableProductTable;