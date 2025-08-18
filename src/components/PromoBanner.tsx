import React from 'react';
import './PromoBanner.css';

const PromoBanner: React.FC = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <div className="scrolling-text">
          <span>🎉 Visit our store today! 🎉</span>
          <span>🌟 Quality toys for every age 🌟</span>
          <span>🚗 Electric cars & rideables available 🚗</span>
          <span>🏪 Visit us at 123 Toy Street 🏪</span>
          <span>📞 Call us: (555) 123-4567 📞</span>
          <span>⏰ Open Mon-Sat: 9AM-8PM ⏰</span>
          <span>🎁 Special discounts for bulk orders 🎁</span>
          <span>🚚 Free delivery for orders over $50 🚚</span>
          <span>👶 Baby cradles & toys for little ones 👶</span>
          <span>🎪 Traditional Rakhdi toys available 🎪</span>
          {/* Duplicate content for seamless loop */}
          <span>🎉 Visit our store today! 🎉</span>
          <span>🌟 Quality toys for every age 🌟</span>
          <span>🚗 Electric cars & rideables available 🚗</span>
          <span>🏪 Visit us at 123 Toy Street 🏪</span>
          <span>📞 Call us: (555) 123-4567 📞</span>
          <span>⏰ Open Mon-Sat: 9AM-8PM ⏰</span>
          <span>🎁 Special discounts for bulk orders 🎁</span>
          <span>🚚 Free delivery for orders over $50 🚚</span>
          <span>👶 Baby cradles & toys for little ones 👶</span>
          <span>🎪 Traditional Rakhdi toys available 🎪</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 