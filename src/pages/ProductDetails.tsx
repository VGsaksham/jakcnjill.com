import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { toys, categories } from '../data/toys';
import './ProductDetails.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const toy = toys.find(t => t.id === parseInt(id || '0'));
  const [selectedImage, setSelectedImage] = useState(0);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isHovering, setIsHovering] = useState(false);
  const [isPc, setIsPc] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Check if device is PC
  useEffect(() => {
    const checkDevice = () => {
      setIsPc(window.innerWidth >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPc || !imageWrapperRef.current) return;
    
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    imageWrapperRef.current.style.setProperty('--mouse-x', `${x}%`);
    imageWrapperRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  if (!toy) {
    return <Navigate to="/toys" replace />;
  }

  const category = categories.find(c => c.id === toy.category);
  const relatedToys = toys.filter(t => 
    t.category === toy.category && t.id !== toy.id
  ).slice(0, 4);

  const whatsAppNumbers = [
    { name: "Sales Team", number: "+91-9876543210", icon: "📞" },
    { name: "Customer Care", number: "+91-9876543211", icon: "🎧" },
    { name: "WhatsApp Business", number: "+91-9876543212", icon: "💬" },
    { name: "Product Specialist", number: "+91-9876543213", icon: "👨‍💼" }
  ];

  const handleWhatsAppClick = (number: string) => {
    const message = `Hi! I'm interested in the ${toy.name} toy. Can you provide more details about availability and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${number.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppPopup(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="description-content">
            <h3>About This Product</h3>
            <p className="product-description">{toy.description}</p>
            
            <div className="specifications">
              <h3>Product Details</h3>
              <div className="spec-grid">
                <div className="spec-item">
                  <span className="spec-label">Age Range</span>
                  <span className="spec-value">{toy.age}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Category</span>
                  <span className="spec-value">{category?.name}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value">{toy.inStock ? 'Available' : 'Out of Stock'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Product ID</span>
                  <span className="spec-value">#{toy.id}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'features':
        return (
          <div className="features-content">
            <h3>Key Features</h3>
            <div className="features-list">
              {toy.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="product-details-new">
      <Helmet>
        <title>{toy.name} - {category?.name} | Jack & Jill Toys Ludhiana, Punjab</title>
        <meta name="description" content={`Buy ${toy.name} at Jack & Jill Toys Ludhiana. ${toy.description} Age: ${toy.age}. Premium quality toys for kids in Punjab, India. Best prices guaranteed!`} />
        <meta name="keywords" content={`${toy.name} Ludhiana, ${category?.name} Punjab, kids toys ${toy.age}, toy shop Ludhiana, Jack Jill toys ${toy.name}, children toys Punjab India`} />
        <link rel="canonical" href={`https://jakcnjill.com/toy/${toy.id}`} />
        <meta property="og:title" content={`${toy.name} - Jack & Jill Toys Ludhiana`} />
        <meta property="og:description" content={`Buy ${toy.name} at Jack & Jill Toys Ludhiana. ${toy.description}`} />
        <meta property="og:url" content={`https://jakcnjill.com/toy/${toy.id}`} />
        <meta property="og:image" content={`https://jakcnjill.com${toy.image}`} />
        <meta property="product:price:amount" content={toy.price.toString()} />
        <meta property="product:price:currency" content="INR" />
      </Helmet>
      {/* Hero Section with Product Image and Key Info */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="image-gallery">
            <div 
              ref={imageWrapperRef}
              className={`main-image-wrapper ${isHovering && isPc ? 'hover-zoom' : ''}`}
              onMouseEnter={() => isPc && setIsHovering(true)}
              onMouseLeave={() => isPc && setIsHovering(false)}
              onMouseMove={handleImageHover}
            >
              <Zoom>
                <img 
                  src={toy.images[selectedImage] || toy.image} 
                  alt={toy.name} 
                  className="hero-image"
                />
              </Zoom>
              <div className="image-overlay">
                <div className="overlay-badge">
                  <span className="badge-icon">🔥</span>
                  <span className="badge-text">Popular</span>
                </div>
              </div>
            </div>
            <div className="thumbnail-grid">
              {toy.images && toy.images.length > 0 ? (
                toy.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${toy.name} view ${index + 1}`} />
                  </div>
                ))
              ) : (
                // Fallback to single image if no variants exist
                <div className="thumbnail active">
                  <img src={toy.image} alt={toy.name} />
                </div>
              )}
            </div>
          </div>

          <div className="hero-info">
            <div className="breadcrumb-mini">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <span className="separator">›</span>
              <Link to="/toys" className="breadcrumb-link">Toys</Link>
              <span className="separator">›</span>
              <span className="current">{toy.name}</span>
            </div>

            <div className="product-badges">
              <div className="category-badge">
                <span className="badge-icon">{category?.icon}</span>
                <span className="badge-text">{category?.name}</span>
              </div>
              <div className="age-badge">
                <span className="badge-icon">👶</span>
                <span className="badge-text">{toy.age}</span>
              </div>
            </div>

            <h1 className="product-title">{toy.name}</h1>
            
            <div className="product-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✨</span>
                <span className="highlight-text">Premium Quality</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🛡️</span>
                <span className="highlight-text">Safety Certified</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚚</span>
                <span className="highlight-text">Available in Store</span>
              </div>
            </div>

            {toy.showPrice && (
              <div className="price-section">
                <div className="price-main">
                  <span className="currency">₹</span>
                  <span className="amount">{toy.price}</span>
                  <span className="unit">INR</span>
                </div>
                <div className="price-savings">
                  <span className="savings-badge">Best Price</span>
                </div>
              </div>
            )}

            <div className="action-section">
              <button 
                className={`get-product-button ${toy.inStock ? 'primary' : 'disabled'}`}
                disabled={!toy.inStock}
                onClick={() => toy.inStock && setShowWhatsAppPopup(true)}
              >
                <span className="button-icon">🛒</span>
                <span className="button-text">
                  {toy.inStock ? 'Get Product' : 'Out of Stock'}
                </span>
              </button>
            </div>

            <div className="guarantee-section">
              <div className="guarantee-item">
                <span className="guarantee-icon">🏪</span>
                <div className="guarantee-content">
                  <h4>Visit Our Store</h4>
                  <p>See the product in person</p>
                </div>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">📞</span>
                <div className="guarantee-content">
                  <h4>Call for Details</h4>
                  <p>Get expert advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Popup */}
      {showWhatsAppPopup && (
        <div className="whatsapp-popup-overlay" onClick={() => setShowWhatsAppPopup(false)}>
          <div className="whatsapp-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Contact Us on WhatsApp</h3>
              <button className="close-button" onClick={() => setShowWhatsAppPopup(false)}>×</button>
            </div>
            <div className="popup-content">
              <p>Choose a contact to get more information about <strong>{toy.name}</strong>:</p>
              <div className="whatsapp-contacts">
                {whatsAppNumbers.map((contact, index) => (
                  <button
                    key={index}
                    className="whatsapp-contact"
                    onClick={() => handleWhatsAppClick(contact.number)}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <div className="contact-info">
                      <span className="contact-name">{contact.name}</span>
                      <span className="contact-number">{contact.number}</span>
                    </div>
                    <span className="whatsapp-icon">💬</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Section */}
      <section className="details-section">
        <div className="details-container">
          <div className="details-tabs">
            <div 
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </div>
            <div 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </div>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedToys.length > 0 && (
        <section className="related-section">
          <div className="related-container">
            <div className="section-header">
              <h2>More {category?.name} Toys</h2>
              <p>Discover similar products your child will love</p>
            </div>
            
            <div className="related-grid">
              {relatedToys.map(relatedToy => (
                <div key={relatedToy.id} className="related-card">
                  <div className="card-image">
                    <Zoom>
                      <img src={relatedToy.image} alt={relatedToy.name} />
                    </Zoom>
                    <div className="card-overlay">
                      <Link to={`/toy/${relatedToy.id}`} className="view-button">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-category">
                      <span className="category-icon">{category?.icon}</span>
                      <span className="category-name">{category?.name}</span>
                    </div>
                    <h3 className="card-title">{relatedToy.name}</h3>
                    {relatedToy.showPrice && (
                      <div className="card-price">
                        <span className="price">₹{relatedToy.price}</span>
                      </div>
                    )}
                    <Link to={`/toy/${relatedToy.id}`} className="card-button">
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Make Your Child Happy?</h2>
            <p>Visit our store to see these amazing toys in person</p>
            <div className="cta-buttons">
              <button className="cta-primary">Visit Store</button>
              <button className="cta-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails; 