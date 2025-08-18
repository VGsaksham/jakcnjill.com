import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Jack & Jill Toys - Your Trusted Toy Store in Ludhiana, Punjab Since 1995</title>
        <meta name="description" content="Learn about Jack & Jill Toys - Ludhiana's trusted toy store since 1995. Discover our story, mission, and commitment to providing quality toys for children in Punjab, India." />
        <meta name="keywords" content="about Jack and Jill Toys, toy store history Ludhiana, trusted toys Punjab, quality children toys India, toy shop story Ludhiana" />
        <link rel="canonical" href="https://jakcnjill.com/about" />
        <meta property="og:title" content="About Jack & Jill Toys - Your Trusted Toy Store in Ludhiana, Punjab" />
        <meta property="og:description" content="Learn about Jack & Jill Toys - Ludhiana's trusted toy store since 1995. Our story, mission, and commitment to quality toys." />
        <meta property="og:url" content="https://jakcnjill.com/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Jack & Jill Toy Shop</h1>
            <p>Making childhood magical since 1995 with carefully curated toys that spark imagination, creativity, and endless fun!</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Jack & Jill Toy Shop was founded by childhood friends Jack Thompson and Jill Martinez, 
                who shared a passion for creating magical childhood experiences. What started as a small 
                local toy store has grown into a beloved destination for families seeking high-quality, 
                educational, and fun toys.
              </p>
              <p>
                We believe that play is essential for a child's development. That's why we carefully 
                select every toy in our collection, ensuring they meet the highest standards of safety, 
                quality, and educational value. From traditional wooden toys to innovative STEM kits, 
                we have something special for every child.
              </p>
              <p>
                Today, we're proud to serve families not just in our local community, but around the 
                world through our online store. Our mission remains the same: to bring joy, learning, 
                and wonder to children everywhere.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏪</span>
                <p>Our first store in 1995</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Every toy in our collection meets or exceeds international safety standards. We rigorously test all products to ensure they're safe for children to use and enjoy.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🧠</div>
              <h3>Educational Value</h3>
              <p>We believe toys should do more than entertain – they should educate. Our selection includes toys that promote learning, creativity, and cognitive development.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to environmental responsibility. Many of our toys are made from sustainable materials and eco-friendly manufacturing processes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Quality & Durability</h3>
              <p>We select toys that are built to last. Quality construction means toys can be passed down through generations, creating lasting memories.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>We stay at the forefront of toy innovation, bringing you the latest in educational technology and creative play experiences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Focus</h3>
              <p>We understand that every family is unique. Our diverse selection ensures there's something perfect for every child and every family situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Founders</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">👨‍💼</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Jack Thompson</h3>
                <p className="member-role">Co-Founder & CEO</p>
                <p>
                  Jack brings over 25 years of experience in retail and child development. 
                  A father of three, he understands firsthand what makes children tick and 
                  what parents look for in quality toys.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">👩‍💼</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Jill Martinez</h3>
                <p className="member-role">Co-Founder & Product Director</p>
                <p>
                  Jill has a background in early childhood education and toy design. 
                  She leads our product curation team and ensures every toy meets our 
                  high standards for safety and educational value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">By the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Unique Toys</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Families</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">28</div>
              <div className="stat-label">Years in Business</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.2%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Magic?</h2>
            <p>
              Explore our carefully curated collection of toys and find the perfect 
              gift to spark joy and imagination in the children you love.
            </p>
            <div className="cta-buttons">
              <Link to="/toys" className="btn btn-primary">Browse Our Collection</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 