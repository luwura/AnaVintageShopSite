import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Wall Decor",
    "Table Decor",
    "Lighting",
    "Kitchen",
    "Decor",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* HEADER */}

      <section className="page-hero products-hero">
        <div className="page-hero-content">
          <div className="hero-small">✦ THE COLLECTION ✦</div>

          <h1>Our Products</h1>

          <p>Vintage decorations for every space.</p>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="products-section">
        <div className="products-layout">
          {/* SIDEBAR */}

          <aside className="category-sidebar">
            <h3>Categories</h3>

            <div className="category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-button active"
                      : "category-button"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="sidebar-divider"></div>

            <h3>Price Range</h3>

            <label className="checkbox">
              <input type="checkbox" />
              Under $50
            </label>

            <label className="checkbox">
              <input type="checkbox" />
              $50 - $100
            </label>

            <label className="checkbox">
              <input type="checkbox" />
              $100 - $200
            </label>

            <label className="checkbox">
              <input type="checkbox" />
              Over $200
            </label>
          </aside>

          {/* PRODUCTS */}

          <div className="product-area">
            <div className="product-toolbar">
              <span>{filteredProducts.length} pieces</span>

              <select>
                <option>Sort by: Newest</option>
                <option>Sort by: Price Low</option>
                <option>Sort by: Price High</option>
              </select>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
