import React, { useState } from "react";

const ProductPopup = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "The Great Gatsby",
      price: "₹399",
      shortDesc: "Classic novel by F. Scott Fitzgerald",
      fullDesc:
        "A timeless story set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      price: "₹299",
      shortDesc: "By Harper Lee",
      fullDesc:
        "A powerful novel about racial injustice and moral growth in the American South.",
    },
    {
      id: 3,
      name: "1984",
      price: "₹349",
      shortDesc: "By George Orwell",
      fullDesc:
        "A dystopian novel that explores totalitarianism, surveillance, and freedom.",
    },
  ];

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  // Inline styles (replacing your .header and .body CSS)
  const headerStyle = {
    textAlign: "left",
    backgroundColor: "red",
    display: "flex",
    padding: "10px",
    color: "white",
  };

  const bodyStyle = {
    textAlign: "center",
    backgroundColor: "aqua",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <div>
      <div style={headerStyle}>
        <h2>KL University Online Book Store</h2>
      </div>

      <div style={bodyStyle}>
        {products.map((product) => (
          <div key={product.id} onClick={() => openPopup(product)}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.shortDesc}</p>
            <hr />
          </div>
        ))}

        {selectedProduct && (
          <div>
            <h2>{selectedProduct.name}</h2>
            <p>Price: {selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPopup;
