import React from 'react';


const ProductCategoryRow = ({ category }) => {
  return (
    <div style={{ backgroundColor: 'blue', padding: 10 }}>
      <h2>{category}</h2>
    </div>
  );
};

export default ProductCategoryRow;