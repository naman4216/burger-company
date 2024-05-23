import React from "react";

const ProductDetailsModal = ({ isOpen, handleClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        {product.description && <p>{product.description}</p>}
        <p>Price: {product.price}</p>
        {/* Add other product details here */}
        <button onClick={() => alert("Added to cart!")}>Add to Cart</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
