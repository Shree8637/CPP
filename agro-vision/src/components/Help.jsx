import React from 'react';
import '../css/style-help.css';

const Help = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <img src="/static/images/logot.png" alt="LOGO" />
          <h3 id="logoText">AGROVISION AI</h3>
        </div>

        <div className="nav-menu" id="navMenu">
          <ul>
            <li><a href="/" className="link">Home</a></li>
            <li><a href="/services" className="link">Services</a></li>
            <li><a href="/about" className="link">About Us</a></li>
            <li><a href="/help" className="link active">Help</a></li>
            <li><a href="/login" className="link">Login</a></li>
          </ul>
        </div>

        <div className="nav-menu-btn">
          {/* <i className="bx bx-menu" onClick={myMenuFunction()*}></i> */}
          <i className="bx bx-menu" ></i>
        </div>
      </nav>

      <div className="top-image" style={{ backgroundImage: "url('/static/video/help-gif.gif')" }}></div>

      <div className="help-banner">
        <div className="help-content">
          <h1>Need Assistance? We're Here to Help!</h1>
          <h2>Find answers to your questions and get the support you need.</h2>
          <p>Explore our resources, FAQs, and tutorials designed to guide you through every step. Whether you’re a first-time user or a seasoned pro, we’ve got you covered.</p>
          <a href="#faq" className="cta-button">Read FAQs</a>
        </div>
      </div>

      <section className="help-section">
        <div className="help-container" style={{ marginTop: '0%' }}>
          <div className="help-content" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h1>Getting Started</h1>
            <p>
              Whether you're new to AGROVISION AI or a seasoned farmer looking to optimize your agricultural practices, this section is designed to guide you through the essentials. Our goal is to ensure you get the most out of AGROVISION AI, from understanding our tools to implementing them effectively in your farming routine.
              In this section, you'll find step-by-step instructions, tips, and insights that will help you navigate our platform with ease. We're here to support you every step of the way, making sure you have all the information you need to start your journey with AGROVISION AI confidently.
            </p>
          </div>

          <div className="help-image">
            <img src="/static/images/farmers.png" alt="Getting Started" style={{ height: '400px', width: 'auto' }} />
          </div>

          <section id="help-content" style={{ justifyContent: 'center', textAlign: 'center', textSizeAdjust: '10px' }}>
            <p style={{ color: 'grey' }}>
              Welcome to the AGROVISION AI Help page! Here, we strive to provide you with all the necessary guidance to make the most out of our platform. Whether you're just starting out or need help with specific features, we're here to assist you every step of the way.
            </p>
            <p style={{ color: 'grey' }}>
              Our platform is designed to be user-friendly, ensuring that even those new to digital farming tools can navigate with ease. If you ever feel unsure or encounter any issues, our support team is ready to help. We understand the importance of reliable tools in modern farming, and we're committed to making your experience with AGROVISION AI as smooth as possible.
            </p>
            <p style={{ color: 'grey' }}>
              From crop yield predictions to personalized recommendations, AGROVISION AI offers a range of features aimed at optimizing your farming practices. Explore our Help section to find detailed guides, FAQs, and troubleshooting tips that will empower you to use AGROVISION AI effectively. Your success is our priority, and we're here to ensure you have the resources you need to thrive.
            </p>
          </section>

          <div className="gif-help" style={{ marginLeft: '450px' }}>
            <img src="/static/images/farmers.webp" alt="" style={{ height: '200px' }} />
            <img src="/static/images/strawbery.webp" alt="farmers" style={{ height: '200px' }} />
            <img src="/static/images/3-help.webp" alt="" style={{ height: '200px' }} />
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="help-container">
          <div className="help-image">
            <img src="/static/images/two-basket.avif" alt="FAQ" />
          </div>
          <div className="help-content">
            <h2>FAQ</h2>
            <p>Find answers to the most frequently asked questions about AGROVISION AI. Whether you're curious about features, pricing, or technical issues, we've got you covered.</p>
            <div className="faq-item">
              <h3>What is AGROVISION AI, and how can it help me?</h3>
              <p>AGROVISION AI is an advanced platform designed to assist farmers by providing crop yield predictions, crop suggestions, and fertilizer recommendations based on user-provided data and environmental factors. Our tools are aimed at optimizing your farming practices, improving yield, and ensuring sustainable agriculture.</p>
            </div>
            <div className="faq-item">
              <h3>How do I get started with AGROVISION AI?</h3>
              <p>To get started, simply sign up on our platform and input your farm's data, such as soil type, climate conditions, and crop history. Our system will then analyze the information and provide you with tailored recommendations to enhance your farming operations.</p>
            </div>
            <div className="faq-item">
              <h3>Is AGROVISION AI suitable for all types of crops?</h3>
              <p>Yes, AGROVISION AI is designed to support a wide range of crops. Our database includes extensive information on various crop types, allowing the system to provide accurate predictions and suggestions regardless of what you’re growing.</p>
            </div>
            <div className="faq-item">
              <h3>How accurate are the crop yield predictions?</h3>
              <p>Our crop yield predictions are based on advanced machine learning algorithms that analyze historical data, weather patterns, and other relevant factors. While no system can guarantee 100% accuracy, AGROVISION AI strives to provide highly reliable predictions to help you make informed decisions.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use AGROVISION AI on mobile devices?</h3>
              <p>Yes, AGROVISION AI is fully optimized for mobile devices, allowing you to access all features and tools on your smartphone or tablet. This ensures that you can manage your farm operations anytime, anywhere.</p>
            </div>
            <div className="faq-item">
              <h3>What kind of support does AGROVISION AI offer?</h3>
              <p>AGROVISION AI offers comprehensive support through our Help Center, including step-by-step guides, FAQs, and a dedicated customer service team ready to assist you with any questions or issues you may encounter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section conclusion">
        <div className="conclusion-content">
          <h2>Need Further Assistance?</h2>
          <p>If you need any further assistance, don't hesitate to contact us. Our team is here to help you with any issues or questions you might have. We're committed to ensuring your experience with AGROVISION AI is as smooth and successful as possible.</p>
        </div>
      </section>

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
            <p>Email: <a href="mailto:agrovisionai@gmail.com">agrovisionai@.com</a></p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AGROVISION AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Help;