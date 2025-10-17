import React from 'react';
import './hero2.css';

function Hero2() {
  return (
    <div className="main-container">
      <div className="title-section">
        <h2>Open Your Demat Account in 4 Easy Steps</h2>
      </div>

      <div className="step step1">
        <h4>Step 1: Sign Up on Niveshak</h4>
        <p>Create your free account on Niveshak by entering your name, mobile number, and email ID. 🔒 Your data is secure with us.</p>
      </div>

      <div className="step step2">
        <h4>Step 2: Complete KYC Instantly</h4>
        <p>Upload your PAN card, Aadhaar, and a selfie to complete your KYC online. 📸 100% digital, no paperwork required!</p>
      </div>

      <div className="step step3">
        <h4>Step 3: Link Your Bank Account</h4>
        <p>Securely link your bank account to enable smooth fund transfers and withdrawals. 🏦 Make sure it’s in your name.</p>
      </div>

      <div className="step step4">
        <h4>Step 4: Start Investing</h4>
        <p>Once verified, your Demat account goes live! 💹 Trade stocks, ETFs, mutual funds — all from one dashboard.</p>
      </div>
    </div>
  );
}

export default Hero2;
