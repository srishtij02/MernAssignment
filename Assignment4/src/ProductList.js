import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Importing CSS

const ProductList = () => {
  const products = [
    { 
      id: 1, 
      name: "MacBook Pro", 
      price: "$1,200", 
      image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296" 
    },
    { 
      id: 2, 
      name: "Iphone 16 Pro Max", 
      price: "$800", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgtNIHL3kk4kYeZXlRGt0NwksplsIGLzQVw&s" 
    },
    { 
      id: 3, 
      name: "Sony Headphones", 
      price: "$150", 
      image: "https://www.theaudiostore.in/cdn/shop/files/SonyWH-ULT900NULTWEARActiveNoise-CancelingWirelessHeadphonesblack01.jpg?v=1720808381" 
    }
  ];

  return (
    <div className="container">
      <h2 className="title">🛒 Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
