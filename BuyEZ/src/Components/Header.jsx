import React, { useState } from "react";
import logo from "../assets/BuyEz.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      {/* Logo */}
      <a href="/">
        <img className="logo" src={logo} alt="Logo" />
      </a>

      {/* Hamburger (Mobile only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={`header ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Right menu */}
      <div className="right-menu">
        <div className="account">
          <Link to="/cart">🛒 ({cartItems.length})</Link>
        </div>
      </div>
    </div>
  );
}
