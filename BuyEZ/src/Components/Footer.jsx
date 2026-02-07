import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">BuyEZ</h2>
          <p>Call us: 888.312.2456 - 666.010.1238</p>
          <p>Text: 200.490.1520 - 666.010.1238</p>
          <p>Email: support@domain.vn</p>

          <div className="social-icons">
            <span>🐦</span>
            <span>📘</span>
            <span>📷</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Menu</h3>
          <ul>
            <li>About Me</li>
            <li>About Service</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Shipping Policy</li>
            <li>Help & Contact Us</li>
            <li>Returns & Refunds</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Newsletter Sign Up</h3>
          <p>
            Sign up for the weekly newsletter and build better ecommerce stores.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
