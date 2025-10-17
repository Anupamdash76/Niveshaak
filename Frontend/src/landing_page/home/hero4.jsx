import React, { useState } from "react";
import "./hero4.css";

const faqs = [
  {
    question: "What is a Demat account?",
    answer: "A Demat (Dematerialized) account holds your stocks and investments in digital format, similar to a bank account for shares.",
  },
  {
    question: "Is opening a Demat account with Niveshak free?",
    answer: "Yes! Niveshak offers zero account opening charges for all users.",
  },
  {
    question: "How long does it take to open a Demat account?",
    answer: "It usually takes less than 10 minutes if you have all your documents ready and complete the e-KYC process.",
  },
  {
    question: "Is my money safe with Niveshak?",
    answer: "Absolutely. We are a SEBI-registered platform and use bank-level encryption for all transactions.",
  },
  {
    question: "Can I start investing with ₹100?",
    answer: "Yes! Through SIPs or fractional shares, you can start investing even with ₹100.",
  },
];

const Hero4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">🙋 Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero4;
