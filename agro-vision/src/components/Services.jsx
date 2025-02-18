import React from 'react';
import '../css/Services.css';
import Navbar from './NavBar';

const Services = () => {
  return (
    <div className="wrapper">
      
      <Navbar />

      <div class="nav-menu-btn">
        {/* <i class="bx bx-menu" onclick={myMenuFunction}></i> */}
        <i class="bx bx-menu"></i>
      </div>

      <div className="top-image" style={{ backgroundImage: 'url(/video/services-gif.gif)' }} />

      <section className="intro-section">
        <h2>Discover Our Comprehensive Agricultural Solutions</h2>
        <p>At AGROVISION AI, we are committed to revolutionizing agriculture through innovative solutions tailored to the needs of modern farmers. Our suite of services is designed to empower you with the insights and tools necessary for optimizing your farming practices and achieving sustainable growth.</p>
        <p>Our Yield Prediction service leverages advanced data analysis to provide accurate forecasts, helping you plan and maximize your harvest. With our Crop Suggestion service, you receive personalized recommendations based on your unique farming conditions, ensuring that you choose the best crops for your soil and climate. Additionally, our Fertilizer and Pesticide Suggestion service offers expert advice on the most effective products to enhance crop health and yield, while promoting environmental sustainability.</p>
        <p>Whether you're looking to increase productivity, make informed planting decisions, or improve crop performance, AGROVISION AI is here to support you every step of the way. Explore our services below to see how we can help you achieve your agricultural goals and drive success in your farming endeavors.</p>
      </section>

      {/* Service Section */}
      <div className="service-section" style={{ display: 'flex', color: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <div>VIDEO</div>
        <div className="video-container">
          <video id="service-video" muted autoPlay>
            <source src="/video/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <section className="services-section">
        <div className="services-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div className="service-card">
            <img src="/images/crop-nutritions.jpeg" alt="Service 1" />
            <h3>Yeid Prediction</h3>
            <p>Our Yield Prediction service uses advanced data analysis to forecast crop yields accurately. By analyzing historical data and current conditions, we provide precise yield forecasts that help farmers plan their harvest and optimize their production strategies. This service leverages our extensive database and user input to deliver actionable insights for maximizing productivity.</p>
            <div className="button-container">
              <a href="/predictYield" className="service-button">Learn More</a>
            </div>
          </div>
          <div className="service-card">
            <img src="/images/Rice field with workers - Vietnam by Pascal Fauchard.jpeg" alt="Service 2" />
            <h3>Crop Suggestion</h3>
            <p>Our Crop Suggestion service provides tailored recommendations based on your specific farming conditions. We use a combination of user-provided data and our comprehensive database to suggest the best crops suited to your soil, climate, and market demands. This helps you make informed decisions about which crops to grow for optimal results and profitability.</p>
            <div className="button-container">
              <a href="/suggestion" className="service-button">Learn More</a>
            </div>
          </div>

          <div className="service-card">
            <img src="/images/pest.jpeg" alt="Service 3" />
            <h3>Fertilizer/Pesticide Suggestion</h3>
            <p>Our Fertilizer and Pesticide Suggestion service offers expert recommendations for improving crop health and yields. By analyzing your soil data and crop requirements, we suggest the most effective fertilizers and pesticides to use. This ensures that you apply the right products in the right amounts.</p>
            <div className="button-container">
              <a href="/fertilizer" className="service-button">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/images/two-grey-men.avif" alt="Expertise and Experience" className="card-image" />
            <div className="card-content">
              <h3>Expertise and Experience</h3>
              <p>Our team consists of seasoned experts in agriculture and technology, bringing years of experience to help you achieve the best results.</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/tech.avif" alt="Advanced Technology" className="card-image" />
            <div className="card-content">
              <h3>Advanced Technology</h3>
              <p>We use cutting-edge AI and machine learning technologies to provide precise and actionable insights, ensuring your farming practices are optimized.</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/sucessful.avif" alt="Customer Success Stories" className="card-image" />
            <div className="card-content">
              <h3>Customer Success Stories</h3>
              <p>Hear from farmers who have transformed their productivity and profitability with our services. Our success is measured by your success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          <div className="text-content">
            <h3>Step-by-Step Process</h3>
            <p>We guide you through a seamless process, from initial setup to receiving your tailored insights. Here’s how it works:</p>
            <ol>
              <li> Register and provide essential details about your farm.</li>
              <li><h4>Sign Up:</h4> Submit data related to soil, crops, and weather conditions.</li>
              <li><h4>Analysis:</h4> Our advanced algorithms analyze the data to provide insights.</li>
              <li><h4>Recommendations:</h4> Receive actionable recommendations to optimize your farming practices.</li>
              <li><h4>Support:</h4> Access ongoing support and resources to ensure success.</li>
            </ol>
          </div>
          <div className="image-content">
            <img src="/images/tractor5.avif" alt="How It Works" />
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-content">
          <div className="text-content">
            <h3>Common Questions</h3>
            <div className="faq-item">
              <h4>What data do I need to provide?</h4>
              <p>We need information about your soil, crops, and local weather conditions to give accurate recommendations.</p>
            </div>
            <div className="faq-item">
              <h4>How does the recommendation system work?</h4>
              <p>Our system uses machine learning algorithms to analyze your data and generate tailored recommendations based on the latest research and trends.</p>
            </div>
            <div className="faq-item">
              <h4>What kind of support is available?</h4>
              <p>We offer 24/7 customer support, training resources, and personalized assistance to help you get the most out of our services.</p>
            </div>
          </div>
          <div className="image-content">
            <img src="/images/grape.png" alt="FAQ" />
          </div>
        </div>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>At AGROVISION AI, our mission is to empower farmers with the best tools and insights to enhance productivity and sustainability. Our comprehensive services are designed to support you every step of the way, ensuring you achieve optimal results. We’re committed to your success and are here to help you thrive.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are dedicated to providing innovative solutions for sustainable agriculture.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Trimurti Chowk, Pune, India</p>
            <p>Email: <a href="mailto:agrovisionai@gmail.com">agrovisionai@gmail.com</a></p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AGROVISION AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default Services;
