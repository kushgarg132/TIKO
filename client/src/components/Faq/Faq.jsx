import React, { useState } from "react";
import "../Faq/Faq.css";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'To create an account, simply click the "Sign Up" button in the top right corner and follow the prompts.',
    },
    {
      question: "How do I book a ticket?",
      answer:
        'To book a ticket, select your desired travel dates and destinations, choose your ticket type, and click the "Book Now" button.',
    },
    {
      question: "Can I change my travel dates?",
      answer:
        "Yes, you can change your travel dates up to 24 hours before your scheduled departure time. Simply log in to your account and make the necessary changes.",
    },
    {
      question: "What if I miss my train?",
      answer:
        "If you miss your train, your ticket may no longer be valid. Please contact customer support for assistance.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;