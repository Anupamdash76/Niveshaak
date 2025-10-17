import React from 'react';
import './aboutPage.css';

// Component to inject styles directly into the document head
const AboutUsStyles = () => (
  <style>{`
    .about-us-page {
      background-color: #FDFDFD;
      color: #1F2937;
      font-family: 'Inter', sans-serif;
    }
    .about-hero {
      text-align: center;
      padding: 6rem 1.5rem;
      background-color: #F9FAFB;
      border-bottom: 1px solid #E5E7EB;
    }
    .about-hero h1 {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color: #111827;
    }
    .about-hero p {
      margin-top: 1rem;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.125rem;
      color: #4B5563;
    }
    .content-section {
      max-width: 80rem;
      margin: 4rem auto;
      padding: 0 1.5rem;
    }
    .mission-section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .mission-section {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    .mission-image {
      width: 100%;
      height: auto;
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    }
    .mission-text h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #FF9933; /* Saffron */
      margin-bottom: 1rem;
    }
    .mission-text p {
      font-size: 1rem;
      line-height: 1.75;
      color: #4B5563;
      margin-bottom: 1rem;
    }
    .ceo-section {
      background-color: #F9FAFB;
      padding: 4rem 1.5rem;
    }
    .ceo-container {
      max-width: 70rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .ceo-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    .ceo-image {
      width: 16rem;
      height: 16rem;
      object-cover: cover;
      border-radius: 9999px;
      margin: 0 auto;
      box-shadow: 0 8px 12px rgba(0,0,0,0.15);
    }
    .ceo-text h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #138808; /* Green */
      margin-bottom: 1rem;
    }
    .ceo-text p {
      font-size: 1.125rem;
      color: #4B5563;
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .values-section {
      text-align: center;
    }
    .values-grid {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .values-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .value-card {
      padding: 2rem;
      border: 1px solid #E5E7EB;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
    }
    .value-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    .value-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
    }
    .made-in-india-section {
      background-color: #F9FAFB;
      padding: 4rem 1.5rem;
      text-align: center;
    }
    .made-in-india-section h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    .made-in-india-section p {
      font-size: 1.125rem;
      color: #4B5563;
      max-width: 42rem;
      margin: 1rem auto;
    }
  `}</style>
);

const AboutUsPage = () => {
  const values = [
    { title: 'Integrity', description: 'We are committed to the highest standards of ethics and transparency in everything we do.' },
    { title: 'Innovation', description: 'We relentlessly pursue new and better ways to serve our clients and improve our platform.' },
    { title: 'Empowerment', description: 'We provide the tools and knowledge to help our users take control of their financial future.' },
  ];

  return (
    <>
      <AboutUsStyles />
      <div className="about-us-page">
        {/* Section 1: Hero */}
        <header className="about-hero">
          <h1>About Niveshak</h1>
          <p>We're on a mission to democratize finance for everyone. We believe that the world's financial markets should be accessible to all, not just the privileged few.</p>
        </header>

        <main>
          {/* Section 2: Our Mission & Story */}
          <section className="content-section">
            <div className="mission-section">
              <div className="mission-text">
                <h2>Our Story</h2>
                <p>Founded in a small garage by a group of passionate engineers and financial experts, Niveshak was born from a simple idea: trading should be simpler, smarter, and more accessible. Frustrated by the complex and expensive platforms available, we set out to build a solution that we would want to use ourselves.</p>
                <p>Today, we are a fast-growing company serving thousands of traders around the globe. Our commitment to our founding principles remains unchanged as we continue to innovate and redefine the future of trading.</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="Our team working collaboratively" className="mission-image" />
              </div>
            </div>
          </section>

          {/* Section 3: Founder & CEO */}
          <section className="ceo-section">
            <div className="ceo-container">
              <img 
                src="/media/images/IMG_2907.JPG" 
                alt="Founder & CEO" 
                className="ceo-image" 
              />
              <div className="ceo-text">
                <h2>Message from our Founder & CEO</h2>
                <p>
                  "At <strong>Niveshak</strong>, our mission is to empower individuals with financial literacy
                  and provide tools to make smarter investment decisions. This journey is not just about profits,
                  but about creating lasting value and opportunities for everyone."
                </p>
                <p className="font-semibold text-gray-800">— Anupam Dash</p>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </section>

          {/* Section 4: Our Core Values */}
          <section className="content-section values-section">
            <h2>Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">The principles that guide our decisions and define our culture.</p>
            <div className="values-grid">
              {values.map((value) => (
                <div key={value.title} className="value-card">
                  <h3>{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Made in India, Made for India */}
          <section className="made-in-india-section">
            <h2>Made in India, for India</h2>
            <p>Niveshak is proudly built in India by a team of dedicated professionals who understand the unique needs of the Indian market. We are committed to empowering Indian investors with a world-class trading platform that is both powerful and easy to use.</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutUsPage;
