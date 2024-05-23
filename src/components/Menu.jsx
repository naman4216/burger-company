import React, { useState } from "react";
import MenuCard from "../layouts/MenuCard";
import ProductDetailsModal from "..layouts/ProductDetailsModal";

const Menu = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const menuData = [
    // Your menu data
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-tertiary">
      <div className="min-h-screen container flex flex-col justify-center py-4">
        <h1 className="font-semibold text-4xl text-center text-secondary mt-5">
          Explore Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 pt-8">
          {menuData.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              price={item.price}
              onClick={() => openModal(item)} // Pass the onClick handler
            />
          ))}
        </div>
      </div>
      <ProductDetailsModal
        isOpen={isModalOpen}
        handleClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default Menu;
