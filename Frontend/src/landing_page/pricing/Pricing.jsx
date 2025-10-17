import React from 'react';
import './Pricing.css';
  // Component to inject styles directly into the document head
  const PricingPageStyles = () => (
    <style>{`
      .pricing-page {
        background-color: #FDFDFD;
        color: #1F2937;
        font-family: 'Inter', sans-serif;
      }
      .pricing-hero {
        text-align: center;
        padding: 6rem 1.5rem;
        background-color: #F9FAFB;
        border-bottom: 1px solid #E5E7EB;
      }
      .pricing-hero h1 {
        font-size: 3rem;
        font-weight: 800;
        color: #111827;
      }
      .pricing-hero p {
        margin-top: 1rem;
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.125rem;
        color: #4B5563;
      }
      .pricing-section {
        max-width: 80rem;
        margin: 4rem auto;
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .pricing-card {
        width: 100%;
        max-width: 32rem;
        background-color: #FFFFFF;
        border-radius: 0.75rem;
        border: 2px solid #1E3A8A; /* Deep Blue */
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        padding: 2.5rem;
        text-align: center;
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
      }
      .price-display {
        font-size: 4rem;
        font-weight: 800;
        color: #1E3A8A; /* Deep Blue */
      }
      .price-display span {
        font-size: 1.25rem;
        font-weight: 500;
        color: #4B5563;
        margin-left: 0.5rem;
      }
      .pricing-card h3 {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: #111827;
      }
      .features-list {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
        text-align: left;
      }
      .features-list li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: #4B5563;
        opacity: 0;
        animation: fadeInUp 0.5s ease-out forwards;
      }
      .features-list li:nth-child(1) { animation-delay: 0.3s; }
      .features-list li:nth-child(2) { animation-delay: 0.4s; }
      .features-list li:nth-child(3) { animation-delay: 0.5s; }
      .features-list li:nth-child(4) { animation-delay: 0.6s; }
      .features-list li:nth-child(5) { animation-delay: 0.7s; }

      .feature-check-icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #FF9933; /* Saffron */
        margin-right: 0.75rem;
      }
      .taxes-section {
        width: 100%;
        max-width: 56rem;
        margin-top: 4rem;
        text-align: center;
        opacity: 0;
        animation: fadeInUp 0.6s ease-out 0.2s forwards;
      }
      .taxes-section h2 {
        font-size: 1.75rem;
        font-weight: 700;
        color: #111827;
      }
      .taxes-section p {
        color: #6B7280;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
      }
      .tax-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
      }
      .tax-table th, .tax-table td {
        border: 1px solid #E5E7EB;
        padding: 0.75rem;
        text-align: left;
      }
      .tax-table th {
        background-color: #F9FAFB;
        font-weight: 600;
      }
      .cta-section {
        background-image: linear-gradient(to right, #1E3A8A, #3B82F6); /* Blue Gradient */
        padding: 6rem 1.5rem;
        text-align: center;
        margin-top: 4rem;
      }
      .cta-section h2 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 1rem;
      }
      .cta-button {
        display: inline-block;
        padding: 1rem 2.5rem;
        background-color: #FFFFFF;
        color: #1E3A8A; /* Deep Blue */
        font-weight: 600;
        border-radius: 0.375rem;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      .cta-button:hover {
        background-color: #F0F0F0;
        transform: translateY(-3px);
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  );

  const PricingPage = () => {
    const planFeatures = [
      'Unlimited Equity Delivery Trades',
      'Advanced Charting Tools',
      'Instant UPI Fund Transfers',
      'Access to All Market Segments',
      'Dedicated Customer Support',
    ];

    return (
      <>
        <PricingPageStyles />
        <div className="pricing-page">
          <header className="pricing-hero">
            <h1>Simple & Transparent Pricing</h1>
            <p>We believe in straightforward pricing. Pay ₹0 brokerage on all your trades, forever. No hidden fees, no complex plans.</p>
          </header>

          <main>
            <section className="pricing-section">
              <div className="pricing-card">
                <div className="price-display">₹0</div>
                <h3>Brokerage on All Trades</h3>
                <ul className="features-list">
                  {planFeatures.map(feature => (
                    <li key={feature}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="feature-check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="taxes-section">
                <h2>Government & Regulatory Charges</h2>
                <p>While brokerage is free, you are still required to pay government taxes and other regulatory fees on your transactions. These charges are standard across all brokers.</p>
                <table className="tax-table">
                  <thead>
                    <tr>
                      <th>Charge</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Securities Transaction Tax (STT)</td>
                      <td>As per government regulations</td>
                    </tr>
                    <tr>
                      <td>Transaction Charges</td>
                      <td>Charged by exchanges (NSE, BSE)</td>
                    </tr>
                    <tr>
                      <td>GST</td>
                      <td>18% on Transaction Charges + SEBI Fees</td>
                    </tr>
                    <tr>
                      <td>SEBI Turnover Charges</td>
                      <td>₹10 / crore</td>
                    </tr>
                    <tr>
                      <td>Stamp Duty</td>
                      <td>Varies by state</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="cta-section">
              <h2>Ready to Trade for Free?</h2>
              <a href="/signup" className="cta-button">
                Open a Free Account
              </a>
            </section>
          </main>
        </div>
      </>
    );
  };

  export default PricingPage;
