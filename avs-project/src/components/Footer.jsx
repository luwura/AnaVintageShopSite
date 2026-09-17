import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-decoration">✦ ─────────────── ✦</div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">✦</div>

          <div>
            <h3>Ana Vintage Shop</h3>
            <p>Objects with a past.</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <span>◎</span>
          <span>◉</span>
          <span>●</span>
        </div>
      </div>

      <div className="copyright">
        © 2026 Ana Vintage Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
