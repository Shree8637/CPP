import React from 'react';
import '../css/style-about.css';
import NavBar from './NavBar';

const About = () => {
  return (
    <div>
      <div id="video">
        <video id="video" muted style={{ width: '100%', height: '100%' }}>
          <source src="/static/video/mellon-4 (1).mp4" type="video/mp4" />
        </video>
      </div>

      <NavBar />

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <img src="/static/images/watering.avif" alt="Intro Image" />
            </div>
            <div className="intro-text">
              <h2>What do we do?</h2>
              <p>
                At AGROVISION AI, we are driven by a simple yet powerful mission: to empower farmers with the tools and knowledge they need to optimize their agricultural practices and improve their livelihoods. Our journey began with a deep understanding of the challenges faced by those who dedicate their lives to cultivating the land. Agriculture is the backbone of our society, and we believe that those who work tirelessly to feed the world deserve the best support technology can offer.
              </p>
              <p>
                <strong>Our Core Values</strong><br />
                <ul>
                  <li><strong>Empowerment:</strong> We are committed to empowering farmers by providing them with the tools and knowledge they need to succeed. We believe that with the right support, every farmer can achieve their full potential.</li>
                  <li><strong>Innovation:</strong> We are passionate about innovation and are constantly exploring new ways to improve our products and services. We stay ahead of the curve by integrating cutting-edge technologies into our solutions.</li>
                  <li><strong>Sustainability:</strong> We are dedicated to promoting sustainable farming practices that protect the environment and ensure the long-term viability of agriculture. Our solutions are designed to minimize waste, conserve resources, and promote the health of our planet.</li>
                  <li><strong>Integrity:</strong> We believe in doing business with integrity and transparency. We are committed to building trust with our customers by delivering on our promises and always putting their needs first.</li>
                </ul>
              </p>
              <div className="gif-container">
                <img src="/static/video/farmer-gif.gif" alt="" />
                <p>Farmers are the backbone of our food system, working tirelessly to cultivate the land and produce the nourishment that sustains us all. Their dedication and hard work ensure that we have access to fresh, healthy food every day. By bridging the gap between the land and our tables, farmers truly are the heart of the food chain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 style={{ marginLeft: '650px' }}>"Our Commitments & Solutions"</h2>
      <section className="header-section">
        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/static/images/planting.avif" alt="Image 1" />
              </div>
              <div className="card-back">
                <h3>Empowerment</h3>
                <p>We are committed to empowering farmers by providing the tools and knowledge they need to succeed. At AGROVISION AI, we believe that with the right support, every farmer can reach their full potential.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/static/images/planting.avif" alt="Image 2" />
              </div>
              <div className="card-back">
                <h3>Innovation</h3>
                <p>Passionate about innovation, we constantly explore new ways to improve our solutions. AGROVISION AI integrates cutting-edge technologies to help farmers stay ahead in a rapidly changing world.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/static/images/planting.avif" alt="Image 3" />
              </div>
              <div className="card-back">
                <h3>Crop Yield Prediction</h3>
                <p>Our advanced machine learning algorithms analyze data to predict crop yields accurately. This helps farmers plan their operations effectively, maximizing profitability and minimizing risks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-middle">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>Our mission is to deliver exceptional quality and service, driven by a commitment to innovation and excellence. We aim to create solutions that make a meaningful impact and enrich the lives of those we serve.</p>
            </div>
            <div className="about-text">
              <h2>Our Values</h2>
              <ul>
                <li>Integrity: We uphold the highest standards of integrity and transparency in all our actions.</li>
                <li>Innovation: We embrace creativity and encourage innovative thinking to solve challenges.</li>
                <li>Customer Focus: Our customers are at the heart of everything we do. We strive to exceed their expectations.</li>
                <li>Excellence: We are dedicated to delivering exceptional results and continuously improving.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are dedicated to providing high-quality services and products to our customers. Our team is passionate about what we do and strives for excellence in every project.</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: agrovisionai@gmail.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: Trimurti Chowkk, Katraj, Pune, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AGROVISION AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;