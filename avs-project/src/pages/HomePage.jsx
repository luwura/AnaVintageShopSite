import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* HERO */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-small">✦ TIMELESS PIECES, LASTING STORIES ✦</div>

          <h1>
            Vintage
            <br />
            Decorations
            <br />
            for a Kinder Home
          </h1>

          <p>
            Discover unique, quality vintage items that bring character, charm
            and history into your space.
          </p>

          <Link to="/products" className="gold-button">
            Shop Collection →
          </Link>
        </div>
      </section>

      {/* FEATURED */}

      <section className="featured-section">
        <SectionTitle
          small="OUR COLLECTION"
          title="Featured Pieces"
          description="A few of our favorite finds, carefully selected for your home."
        />

        <div className="products-grid featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link to="/products" className="text-link">
          View All Products →
        </Link>
      </section>

      {/* QUOTE */}

      <section className="quote-section">
        <div className="quote-border">
          <div className="quote-symbol">✦</div>

          <blockquote>
            "Not just objects,
            <br />
            but pieces of the past,
            <br />
            for your present."
          </blockquote>

          <div className="quote-symbol">✦</div>
        </div>
      </section>

      {/* WHY US */}

      <section className="values-section">
        <SectionTitle
          small="WHY ANA VINTAGE SHOP"
          title="Pieces With Character"
        />

        <div className="values-grid">
          <div className="value">
            <div className="value-icon">♢</div>
            <h3>Authentic Pieces</h3>
            <p>
              Carefully selected vintage items with their own unique history.
            </p>
          </div>

          <div className="value">
            <div className="value-icon">♧</div>
            <h3>Safe Shipping</h3>
            <p>
              Your treasures are packed with care and protected on their
              journey.
            </p>
          </div>

          <div className="value">
            <div className="value-icon">♡</div>
            <h3>Growing Collection</h3>
            <p>
              New finds are added regularly, so there is always something new to
              discover.
            </p>
          </div>

          <div className="value">
            <div className="value-icon">✧</div>
            <h3>Sustainable Choice</h3>
            <p>
              Give beautiful objects a second life instead of letting them be
              forgotten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
