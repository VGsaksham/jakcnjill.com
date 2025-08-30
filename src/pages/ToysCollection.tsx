import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { toys, categories, Toy } from '../data/toys';
import './ToysCollection.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ToysCollection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [visibleCount, setVisibleCount] = useState(30);
  const PAGE_SIZE = 30;
  
  const categoryFilter = searchParams.get('category') || '';

  const filteredAndSortedToys = useMemo(() => {
    let filtered = toys.filter(toy => {
      const matchesSearch = toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           toy.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || toy.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

    // Sort toys
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, categoryFilter, sortBy]);

  // Reset visible count when filters/search/sort change
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchTerm, categoryFilter, sortBy]);

  const handleCategoryFilter = (category: string) => {
    if (category === categoryFilter) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchTerm('');
    setSortBy('name');
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="toys-collection">
      <Helmet>
        <title>Kids Toys Collection - Bikes, Jeeps & Educational Toys | Jack & Jill Toys Ludhiana</title>
        <meta name="description" content="Browse our extensive collection of premium kids toys in Ludhiana, Punjab. Find bikes, jeeps, educational toys, and more. Quality toys for children of all ages at Jack & Jill Toys." />
        <meta name="keywords" content="kids toys collection Ludhiana, children bikes Punjab, toy jeeps Ludhiana, educational toys Punjab, baby toys Ludhiana, toy collection India, Jack Jill toys catalog" />
        <link rel="canonical" href="https://jakcnjill.com/toys" />
        <meta property="og:title" content="Kids Toys Collection - Jack & Jill Toys Ludhiana" />
        <meta property="og:description" content="Browse our extensive collection of premium kids toys in Ludhiana, Punjab. Find bikes, jeeps, educational toys, and more." />
        <meta property="og:url" content="https://jakcnjill.com/toys" />
      </Helmet>
      <div className="container">
        <div className="page-header">
          <h1>Our Toys Collection</h1>
          <p>Discover the perfect toy for every child's imagination and development.</p>
        </div>

        {/* Search and Filters */}
        <div className="collection-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search toys..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${categoryFilter === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-section">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {(categoryFilter || searchTerm) && (
            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>
            Showing {Math.min(visibleCount, filteredAndSortedToys.length)} of {filteredAndSortedToys.length} items
            {categoryFilter && (
              <span> in "{categories.find(c => c.id === categoryFilter)?.name}"</span>
            )}
            {searchTerm && <span> matching "{searchTerm}"</span>}
          </p>
        </div>

        {/* Toys Grid */}
        {filteredAndSortedToys.length > 0 ? (
          <div className="products-grid">
            {filteredAndSortedToys.slice(0, visibleCount).map(toy => (
              <div key={toy.id} className={`product-card ${!toy.inStock ? 'out-of-stock' : ''}`}>
                <div className="card-image-container">
                  <Zoom>
                    <img src={toy.image} alt={toy.name} className="card-image" loading="lazy" />
                  </Zoom>
                  {!toy.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
                  <div className="card-badge">20% OFF</div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-title">{toy.name}</h3>
                  {toy.showPrice !== false && (
                    <div className="card-price">
                      <span className="price-amount">Rs. {toy.price.toLocaleString()}</span>
                    </div>
                  )}
                  <Link 
                    to={`/toy/${toy.id}`} 
                    className="btn btn-primary btn-full"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">😔</div>
            <h3>No toys found</h3>
            <p>Try adjusting your search terms or filters.</p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredAndSortedToys.length && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              className="btn btn-primary"
              onClick={() => setVisibleCount(prev => Math.min(prev + PAGE_SIZE, filteredAndSortedToys.length))}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToysCollection; 