import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './hero.css';

function Hero() {
  const navigate = useNavigate();
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY || process.env.REACT_APP_NEWS_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.status === 'error') {
          throw new Error(data.message);
        }

        setArticles(data.articles.slice(0, 5));
        
      } catch (e) {
        console.error("Failed to fetch news:", e.message);
        setError(`Error: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Made in <span style={{ color: '#1976D2' }}>INDIA</span><br />
            Made for <span style={{ color: '#1976D2' }}>INDIA</span>
          </h1>
        </div>

        {/* ✅ New container for the header and the box */}
        <div className="news-container">
          <div className="live-header">
            <span className="live-dot"></span>
            <b>LIVE NEWS</b>
          </div>
          <div className="live-news-box">
            <ul className="ticker-list">
              {loading && <li>Loading news...</li>}
              {error && <li>{error}</li>}
              {!loading && !error && articles.length === 0 && <li>No news available.</li>}

              {/* Render the list of articles */}
              {!loading && !error && articles.map((article) => (
                <li key={article.url}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}

              {/* DUPLICATE the list for a seamless loop */}
              {!loading && !error && articles.map((article) => (
                <li key={`${article.url}-duplicate`} aria-hidden="true">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" tabIndex="-1">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="centre-button">
        <p className="hero-subheading">
          📈 Start Growing Your Wealth<br/>
          🚀 Let Your Investments Take Off
        </p>
        <button onClick={() => navigate("/signup")}>GET STARTED</button>
      </div>
    </div>
  );
}

export default Hero;