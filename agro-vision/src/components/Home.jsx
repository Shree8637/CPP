import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import Navbar from './NavBar';

function Home() { 
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slides = document.getElementsByClassName("mySlides");
        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        };
        showSlides();
    }, []);

    return (
        <div className="wrapper">

            <Navbar />

            <div className="carousel">
                <div className="carousel-images">
                    <div className="mySlides fade">
                        <img src="/images/cor1.png" style={{ width: '100%' }} alt="slide window 1" />
                    </div>
                    <div className="mySlides fade">
                        <img src="/images/cor2.png" style={{ width: '100%' }} alt="slide window 2" />
                    </div>
                    <div className="mySlides fade">
                        <img src="/images/cor3.png" style={{ width: '100%' }} alt="slide window 3" />
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="card">
                    <div className="card-image">
                        <img src="/images/farmerindian.avif" alt="Farmer" />
                    </div>
                    <div className="card-text">
                        <h1>"Accurate Crop Yield Predictions"</h1>
                        <p>"AGROVISION AI leverages advanced machine learning algorithms to predict crop yields with high precision. By analyzing various factors such as soil quality, weather conditions, and crop types, we provide you with reliable forecasts that help you make data-driven decisions. Maximize your harvest potential and plan your resources more effectively with our predictive tools."</p>
                        <p>
                            <h2>Benefits:</h2>
                            <h3>Enhanced Planning:</h3> Anticipate your crop yield to optimize resource allocation.
                            <h3>Improved Efficiency:</h3> Make informed decisions to boost productivity.
                            <h3>Improved Efficiency:</h3> Use accurate predictions to guide your farming practices.
                        </p>
                        <div className="card-button-container">
                            <a href="/suggestion" className="card-button">Get Crop Suggestion</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="card">
                    <div className="card-text">
                        <h1>"Personalized Crop Suggestions"</h1>
                        <p>"Not sure which crops to plant? AGROVISION AI offers tailored crop recommendations based on your specific conditions. By evaluating factors such as soil type, climate, and previous crop performance, our platform suggests the best crops for your land. Increase your productivity and profitability with expert guidance tailored to your unique situation."</p>
                        <p>
                            <h2>Benefits:</h2>
                            <h3>Customized Recommendations:</h3> Receive suggestions based on your soil and climate conditions.
                            <h3>Increased Yield Potential:</h3> Choose crops that are well-suited to your environment.
                            <h3>Optimized Planting:</h3> Make informed choices to enhance your farming success.
                        </p>
                        <div className="card-button-container">
                            <a href="/predictYield" className="card-button">Predict Your Yeild</a>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src="/images/mirror-img2.jpg" alt="Farmer" />
                    </div>
                </div>
            </div>

            <section className="cta-section">
                <h2>Ready to Get Started?</h2>
                <p>Join us today and experience the benefits of our services.</p>
                <a href="/about" className="cta-button">Wanna Know More?</a>
            </section>

            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial">
                    <p>"Our experience with AGROVISION AI has been nothing short of exceptional. As a medium-sized farming operation, we were struggling to maximize our crop yields and often made decisions based on guesswork. Since integrating AGROVISION AI into our workflow, we've seen a remarkable improvement in our output. Their yield prediction tool is incredibly accurate, and the crop suggestions have helped us make the most of our land. The user interface is intuitive, making it easy even for those with limited tech experience. Moreover, their customer support is top-notch – always responsive and ready to assist with any questions we have. AGROVISION AI has become an indispensable tool in our farming strategy, and we can't recommend them highly enough to other farmers seeking to elevate their operations."</p>
                    <cite>- Anjali Patel</cite>
                </div>
                <div className="testimonial">
                    <p>"Partnering with AGROVISION AI has revolutionized the way we manage our agricultural processes. We operate a large-scale farm, and the ability to predict crop yields with precision has been invaluable. The data-driven crop and fertilizer suggestions have not only improved our efficiency but also our profitability. Before AGROVISION AI, we relied heavily on traditional methods, which often resulted in inconsistent results. Now, we have a clear, science-backed approach to decision-making that has consistently led to better outcomes. The platform's design is user-friendly, which means our team can quickly access the insights we need without any hassle. We also appreciate the continuous improvements and updates AGROVISION AI provides, showing their commitment to helping farmers like us succeed. It's rare to find a partner so dedicated to innovation and customer satisfaction – AGROVISION AI truly stands out in the industry."</p>
                    <cite>- Rajesh Kumar</cite>
                </div>
            </section>

            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="project">
                    <img src="/images/Farming by Donna Jos Sia.jpeg" alt="Project 1" style={{ height: '50%', width: '50%' }} />
                    <h3>Smart Crop Yield Prediction System</h3>
                    <p>This project leverages advanced machine learning algorithms to predict crop yields with high accuracy. By analyzing historical data and current environmental conditions, the system helps farmers make informed decisions about planting and harvesting, ultimately maximizing their productivity and profitability. The project has been widely adopted and praised for its ease of use and significant impact on agricultural efficiency.</p>
                </div>
                <div className="project">
                    <img src="/images/fertilizer.jpeg" alt="Project 2" style={{ height: '50%', width: '50%' }} />
                    <h3>AI-Powered Crop and Fertilizer Suggestion Tool</h3>
                    <p>This innovative tool provides farmers with tailored recommendations on the best crops to plant and the most effective fertilizers to use, based on soil conditions, climate data, and other relevant factors. The AI-driven system ensures that farmers receive precise guidance, leading to improved crop quality and sustainable farming practices. This project has been instrumental in helping farmers optimize their resources and achieve better yields.</p>
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
}

export default Home;
