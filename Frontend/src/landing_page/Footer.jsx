import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="media/images/logo2.jpg" alt="Niveshak Logo" className="footer-logo" />
            <p>&copy; 2024 Niveshak. Made in India, made for India.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
              <a href="#">Partner Program</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">CSR</a>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="./support">Help Center</a>
              <a href="#">Blogs & Guides</a>
              <a href="./Pricing">Fees & Charges</a>
              <a href="#">Downloads</a>
            </div>

            <div className="footer-column">
              <h4>Account</h4>
              <a href="./signup">Open Demat Account</a>
              <a href="#">Fund Transfer</a>
              <a href="#">Track Application</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Investments in the stock market are subject to market risks. Please read all scheme related documents carefully before investing. Niveshak is not a registered broker and only provides tools for paper trading and learning.
          </p>
          <p>
            Never share your OTPs, account passwords, or sensitive financial details with anyone. Always verify information through official Niveshak sources.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
