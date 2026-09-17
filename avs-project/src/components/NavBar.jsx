import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-symbol">✦</span>

          <div>
            <div className="logo-main">Ana Vintage Shop</div>
            <div className="logo-subtitle">EST. 2021</div>
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-icons">
          <button>⌕</button>
          <button>♧</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
