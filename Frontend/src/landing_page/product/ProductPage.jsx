import React from 'react';
import './Product.css';

// Component to inject styles directly into the document head
const ProductPageStyles = () => (
  <style>{`
    .product-page {
      background-color: #FDFDFD;
      color: #1F2937;
      font-family: 'Inter', sans-serif;
    }
    .product-hero {
      text-align: center;
      padding: 6rem 1.5rem;
      background-color: #F9FAFB;
      border-bottom: 1px solid #E5E7EB;
      position: relative;
      overflow: hidden;
    }
    .product-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80"><path fill="%23E5E7EB" fill-opacity="0.4" d="M0 0h80v80H0zM20 20h40v40H20z"/></svg>');
      opacity: 0.3;
      z-index: 1;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .product-hero h1 {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color: #111827;
    }
    .product-hero p {
      margin-top: 1rem;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.125rem;
      color: #4B5563;
    }
    .features-section {
      max-width: 80rem;
      margin: 4rem auto;
      padding: 2rem 1.5rem;
    }
     .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .section-header h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #111827;
    }
     .section-header p {
      margin-top: 0.5rem;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
      color: #4B5563;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .feature-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .feature-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .feature-card {
      background-color: #FFFFFF;
      padding: 2rem;
      border-radius: 0.75rem;
      border: 1px solid #E5E7EB;
      transition: all 0.3s ease;
      text-align: center;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      border-color: #FF9933; /* Saffron */
    }
    .feature-icon-wrapper {
      height: 4rem;
      width: 4rem;
      margin: 0 auto 1.5rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background-color: #FEF3C7; /* Light Saffron */
    }
    .feature-icon {
      height: 2rem;
      width: 2rem;
      color: #FF9933; /* Saffron */
    }
    .feature-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
    }
    .feature-card p {
      margin-top: 0.5rem;
      color: #4B5563;
      font-size: 0.9rem;
    }
    .app-mockup-section {
        padding: 4rem 1.5rem;
        background-color: #F9FAFB;
    }
    .app-mockup-content {
        max-width: 80rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
        align-items: center;
    }
    @media (min-width: 1024px) {
        .app-mockup-content {
            grid-template-columns: 1fr 1fr;
        }
    }
    .app-mockup-image {
        max-width: 24rem;
        margin: 0 auto;
        border-radius: 1.5rem;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    }
    .cta-section {
      background-image: linear-gradient(to right, #1E3A8A, #3B82F6); /* Blue Gradient */
      padding: 6rem 1.5rem;
      text-align: center;
    }
    .cta-section h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 1rem;
    }
    .cta-section p {
        color: #DBEAFE;
        max-width: 42rem;
        margin: 0 auto 2rem auto;
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
  `}</style>
);

const ProductPage = () => {
  const features = [
    {
      title: 'Multi-Language Support',
      description: 'Trade in your preferred language. Niveshak supports English, Hindi, and many other regional languages.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13-4-4-4 4M1 19h12a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Instant UPI Funding',
      description: 'Fund your account instantly and securely with any UPI app. We make it easy to start trading in seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.657 0-3-.895-3-2s1.343-2 3-2 3-.895 3-2-1.343-2-3-2m0 10c1.11 0 2.08-.402 2.599-1M12 18v-1" />
        </svg>
      ),
    },
    {
      title: 'Advanced Charting Tools',
      description: 'Analyze the market with powerful and intuitive charting tools, including a wide range of indicators to inform your decisions.',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
        </svg>
      ),
    },
    {
      title: 'Tailored Education',
      description: 'Learn the ins and outs of the stock market with our comprehensive library of resources, all tailored for the Indian investor.',
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
        </svg>
      ),
    },
     {
      title: 'Transparent Pricing',
      description: 'We offer some of the most competitive brokerage fees in the market, so you can keep more of your profits.',
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h4m5 6H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z" />
        </svg>
      ),
    },
     {
      title: 'Bank-Grade Security',
      description: 'Your security is our top priority. We use the latest encryption technologies to protect your data and your investments.',
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <ProductPageStyles />
      <div className="product-page">
        <header className="product-hero">
          <div className="hero-content">
            <h1>The Niveshak Advantage</h1>
            <p>A powerful and intuitive trading platform, designed for the modern Indian investor.</p>
          </div>
        </header>

        <main>
          <section className="features-section">
            <div className="section-header">
                <h2>Everything You Need to Succeed</h2>
                <p>We've packed our platform with powerful features to give you a competitive edge in the market, whether you're a beginner or a seasoned pro.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="app-mockup-section">
            <div className="app-mockup-content">
                <div className="section-header" style={{textAlign: 'left'}}>
                    <h2>Trade On-the-Go</h2>
                    <p style={{marginLeft: 0}}>Our mobile app brings the full power of Niveshak to your fingertips. Monitor your portfolio, analyze charts, and execute trades from anywhere, at any time.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" alt="Niveshak app mockup" className="app-mockup-image" />
            </div>
          </section>

          <section className="cta-section">
            <h2>Join Thousands of Indian Investors</h2>
            <p>Take the next step in your financial journey. Open an account with Niveshak today and experience the future of trading.</p>
            <a href="/signup" className="cta-button">
              Open a Free Account
            </a>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductPage;
