import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <div style={{ backgroundColor: 'red', padding: 10 }}>
      <p>
        {product.name} - {product.price}
      </p>
    </div>
  );
};

export default ProductRow;