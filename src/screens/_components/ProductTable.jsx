import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ filterText }) => {
  const products = [
    { category: "Electrónica", name: "TV", price: 1000 },
    { category: "Electrónica", name: "Radio", price: 200 },
    { category: "Electrónica", name: "Televisor", price: 800 },
    { category: "Electrónica", name: "Altavoces", price: 150 },
    { category: "Electrónica", name: "Tableta", price: 400 },
    { category: "Electrónica", name: "Camara digital", price: 300 },
    { category: "Electrónica", name: "Consola de videojuegos", price: 500 },

    { category: "Deportes", name: "Pelota", price: 50 },
    { category: "Deportes", name: "Bicicleta", price: 500 },
    { category: "Deportes", name: "Balón de fútbol", price: 20 },
    { category: "Deportes", name: "Raqueta de tenis", price: 80 },
    { category: "Deportes", name: "Patines de hielo", price: 120 },
    { category: "Deportes", name: "Pelota de baloncesto", price: 30 },
    { category: "Deportes", name: "Equipo de buceo", price: 250 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "lavender", padding: 20 }}>
      {filteredProducts.map((product, index) => (
        <div key={index}>
          <ProductCategoryRow category={product.category} />
          <ProductRow product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
