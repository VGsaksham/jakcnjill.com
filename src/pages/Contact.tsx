import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Jack & Jill Toys Ludhiana - Get in Touch | Punjab Toy Store</title>
        <meta name="description" content="Contact Jack & Jill Toys in Ludhiana, Punjab. Get in touch for toy inquiries, product information, or visit our store. Phone: +91-98765-43210. Serving all of Punjab, India." />
        <meta name="keywords" content="contact Jack and Jill Toys, toy store Ludhiana contact, Punjab toys phone number, Jack Jill toys address, toy shop Ludhiana location" />
        <link rel="canonical" href="https://jakcnjill.com/contact" />
        <meta property="og:title" content="Contact Jack & Jill Toys Ludhiana - Get in Touch" />
        <meta property="og:description" content="Contact Jack & Jill Toys in Ludhiana, Punjab. Get in touch for toy inquiries, product information, or visit our store." />
        <meta property="og:url" content="https://jakcnjill.com/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Whether you have questions about our toys, need gift recommendations, or just want to say hello.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels, and we'll get back to you as soon as possible!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Phone</h4>
                    <p>+91-98765-43210</p>
                    <small>Monday - Sunday: 9AM - 9PM IST<br />Always ready to help!</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>info@jakcnjill.com</p>
                    <small>We typically respond within 24 hours</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h4>Visit Our Store</h4>
                    <p>Jack & Jill Toys<br />Ludhiana, Punjab 141001<br />India</p>
                    <small>Monday - Sunday: 9AM - 9PM<br />Serving Ludhiana & surrounding areas</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h4>Social Media</h4>
                    <div className="social-links">
                      <a href="#" className="social-link">📘 Facebook</a>
                      <a href="#" className="social-link">📷 Instagram</a>
                      <a href="#" className="social-link">🐦 Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon!</p>
                
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="recommendation">Gift Recommendation</option>
                          <option value="order">Order Support</option>
                          <option value="return">Returns & Exchanges</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-large">
                      Send Message 📤
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>🚚 What is your shipping policy?</h4>
              <p>We offer free shipping on all orders over $50. Standard shipping takes 2-5 business days, and we also offer express shipping options.</p>
            </div>
            
            <div className="faq-item">
              <h4>↩️ Can I return or exchange items?</h4>
              <p>Yes! We have a 30-day return policy. Items must be in original condition with packaging. We'll provide a prepaid return label.</p>
            </div>
            
            <div className="faq-item">
              <h4>🛡️ Are your toys safe for children?</h4>
              <p>Absolutely! All our toys meet or exceed safety standards. Each product listing includes age recommendations and safety information.</p>
            </div>
            
            <div className="faq-item">
              <h4>🎁 Do you offer gift wrapping?</h4>
              <p>Yes, we offer beautiful gift wrapping for $4.99. You can also add a personalized message to make it extra special!</p>
            </div>
            
            <div className="faq-item">
              <h4>💳 What payment methods do you accept?</h4>
              <p>We accept cash, all major credit/debit cards, UPI payments (PhonePe, Google Pay, Paytm), and bank transfers. Easy and secure payment options!</p>
            </div>
            
            <div className="faq-item">
              <h4>🏪 Can I visit your physical store?</h4>
              <p>Yes! Our store is located in Ludhiana, Punjab. We're open Monday-Sunday 9AM-9PM. Visit us to see our amazing collection of toys in person!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 