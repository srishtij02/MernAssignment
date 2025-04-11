import React from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css"; // Importing CSS

const productData = {
  1: { 
    name: "MacBook Pro", 
    description: "A high-performance laptop for professionals.", 
    price: "$1,200", 
    image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296" 
  },
  2: { 
    name: "Iphone 16 Pro Max", 
    description: "The latest smartphone with powerful features.", 
    price: "$800", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgtNIHL3kk4kYeZXlRGt0NwksplsIGLzQVw&s" 
  },
  3: { 
    name: "Sony Headphones", 
    description: "Noise-cancelling headphones for immersive sound.", 
    price: "$150", 
    image: "https://www.theaudiostore.in/cdn/shop/files/SonyWH-ULT900NULTWEARActiveNoise-CancelingWirelessHeadphonesblack01.jpg?v=1720808381" 
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <h3>Product not found</h3>;

  return (
    <div className="container">
      <div className="details-card">
        <img src={product.image} alt={product.name} className="details-image"/>
        <div className="details-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3 className="price">{product.price}</h3>
          <Link to="/">
            <button className="btn">Back to Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
