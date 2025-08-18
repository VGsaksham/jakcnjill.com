import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { toys, Toy } from '../data/toys';
import homeContent from '../data/homeContent.json';
import './Home.css';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Toy[]>([]);

  // Function to get 8 random products from all toys
  const getRandomProducts = (): Toy[] => {
    const shuffled = [...toys].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  // Load random products on component mount and set up interval
  useEffect(() => {
    // Load initial random products
    const loadRandomProducts = () => {
      const randomProducts = getRandomProducts();
      setFeaturedProducts(randomProducts);
      console.log('Featured products updated with random selection:', randomProducts.length, 'products');
    };

    // Load products immediately
    loadRandomProducts();

    // Set up interval to refresh products every 10 minutes (600,000 milliseconds)
    const interval = setInterval(() => {
      loadRandomProducts();
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const heroStyle = {
    background: `linear-gradient(rgba(68, 183, 196, 0.8), rgba(68, 183, 196, 0.6)), url('/img/hero-toy.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="home">
      <Helmet>
        <title>Jack & Jill Toys - Best Kids Toys Store in Ludhiana, Punjab | Premium Quality Toys</title>
        <meta name="description" content="Welcome to Jack & Jill Toys - Ludhiana's premier kids toy store! Discover amazing bikes, jeeps, educational toys & more. Quality toys for happy children in Punjab, India." />
        <meta name="keywords" content="Jack and Jill Toys Ludhiana, best toy store Punjab, kids toys Ludhiana, children bikes Punjab, toy shop Ludhiana, premium toys India, educational toys Ludhiana" />
        <link rel="canonical" href="https://jakcnjill.com/" />
        <meta property="og:title" content="Jack & Jill Toys - Best Kids Toys Store in Ludhiana, Punjab" />
        <meta property="og:description" content="Welcome to Jack & Jill Toys - Ludhiana's premier kids toy store! Discover amazing bikes, jeeps, educational toys & more." />
        <meta property="og:url" content="https://jakcnjill.com/" />
      </Helmet>
      {/* Hero Section with Cloud Design */}
      <section className="hero-section" style={heroStyle}>
        <div className="cloud-bg">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>{homeContent.hero.title}</h1>
            <p>{homeContent.hero.subtitle}</p>
            <div className="hero-buttons">
              <Link to={homeContent.hero.primaryButton.link} className="btn btn-primary">
                {homeContent.hero.primaryButton.text}
              </Link>
              <Link to={homeContent.hero.secondaryButton.link} className="btn btn-secondary">
                {homeContent.hero.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">{homeContent.featuredProducts.icon}</div>
            <h2 className="section-title">
              {homeContent.featuredProducts.title}
              <span className="refresh-indicator">🔄</span>
            </h2>
            <p className="section-subtitle">
              Refreshes automatically every 10 minutes with new random products
            </p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="card-image-container">
                  <img src={product.image} alt={product.name} className="card-image" />
                  <div className="card-badge">Featured</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  {product.showPrice && (
                    <div className="card-price">
                      <span className="price-amount">Rs. {product.price.toLocaleString()}</span>
                    </div>
                  )}
                  <Link to={`/toy/${product.id}`} className="btn btn-primary btn-full">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Loading state */}
          {featuredProducts.length === 0 && (
            <div className="loading-products">
              <div className="loading-spinner">🔄</div>
              <p>Loading featured products...</p>
            </div>
          )}
        </div>
      </section>

      {/* Promotional Sections */}
      {homeContent.promotions.map(promotion => (
        <section key={promotion.id} className={promotion.className}>
          {promotion.className.includes('cloud-cutout') || promotion.className.includes('promo-section') || 
           promotion.className.includes('educational-section') || promotion.className.includes('happy-kids-section') ? (
            <div className={`cloud-cutout ${promotion.reverse ? 'reverse' : ''}`}>
              <div className="cloud-shape"></div>
              <div className="promo-content">
                <div className="promo-text">
                  <h2>{promotion.title}</h2>
                  {promotion.subtitle && <h3>{promotion.subtitle}</h3>}
                  <p>{promotion.description}</p>
                  <Link to={promotion.buttonLink} className="btn btn-promo">
                    {promotion.buttonText}
                  </Link>
                </div>
                <div className="promo-image">
                  <img src={promotion.image} alt={promotion.imageAlt} />
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className={promotion.className.includes('arrivals') ? 'arrivals-card' : 'welcome-card'}>
                <div className={promotion.className.includes('arrivals') ? 'arrivals-content' : 'welcome-content'}>
                  <h2>{promotion.title}</h2>
                  {promotion.subtitle && <h3>{promotion.subtitle}</h3>}
                  <p>{promotion.description}</p>
                  <Link to={promotion.buttonLink} className={`btn ${promotion.className.includes('arrivals') ? 'btn-secondary' : 'btn-primary'}`}>
                    {promotion.buttonText}
                  </Link>
                </div>
                <div className={promotion.className.includes('arrivals') ? 'arrivals-image' : 'welcome-image'}>
                  <img src={promotion.image} alt={promotion.imageAlt} />
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Home; 