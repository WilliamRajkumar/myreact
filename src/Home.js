import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Products data is not an array:', data.products);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container">
      <h1 className="heading">Smartphones</h1>
      {products.length > 0 && (
        <div className="product-container">
          <div className="navigation-buttons">
            <button className="nav-button" onClick={handlePrevious}>Previous</button>
            <button className="nav-button" onClick={handleNext}>Next</button>
          </div>
          <div className="product-details">
            <h2>{products[currentIndex].title}</h2>
            <p>{products[currentIndex].description}</p>
            <p>Price: ${products[currentIndex].price}</p>
            <img className="thumbnail" src={products[currentIndex].thumbnail} alt={products[currentIndex].title} />
            <div className="image-container">
              {products[currentIndex].images.map((image, index) => (
                <img key={index} className="additional-image" src={image} alt={`${products[currentIndex].title} - ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
