
import React from "react";
import "./hero3.css";

const uspData = [
  {
    icon: "🛡️",
    title: "Zero Brokerage",
    description: "Enjoy trading with zero or the lowest brokerage fees in the industry. Save more as you invest more."
  },
  {
    icon: "⚡",
    title: "Fast Order Execution",
    description: "Experience lightning-fast trade execution with our advanced trading infrastructure."
  },
  {
    icon: "📱",
    title: "Seamless Mobile App Experience",
    description: "Trade anytime, anywhere with our intuitive and feature-rich mobile app."
  },
  {
    icon: "📊",
    title: "Advanced Analytics Tools",
    description: "Make informed decisions with real-time data, market insights, and charting tools."
  },
  {
    icon: "👥",
    title: "Strong Community & Support",
    description: "Join a growing community of investors and get 24/7 expert support when you need it."
  }
];

const Hero3 = () => {
  return (
    <div className="usp-container">
      <h2 className="usp-title">Why Choose Niveshak?</h2>
      <div className="usp-grid">
        {uspData.map((usp, index) => (
          <div key={index} className="usp-card">
            <div className="usp-icon">{usp.icon}</div>
            <h3 className="usp-heading">{usp.title}</h3>
            <p className="usp-description">{usp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero3; // This component can be imported and used in any parent page
