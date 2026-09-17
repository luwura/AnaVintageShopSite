function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />

        <button className="favorite-button">♡</button>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <span className="product-price">${product.price}</span>

          <button className="add-button">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
