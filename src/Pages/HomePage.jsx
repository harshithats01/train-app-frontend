import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import CustomNavbar from './CustomNavbar';
import 'font-awesome/css/font-awesome.min.css';  // Import FontAwesome icons

function HomePage() {
    return (
        <div style={styles.container}>
            {/* Full-width Navbar */}
            <div style={styles.navbarContainer}>
                <CustomNavbar />
            </div>

            {/* Carousel */}
            <Carousel style={styles.carousel}>
                {/* Carousel Items */}
                <Carousel.Item style={styles.carouselItem}>
                    <img
                        className="d-block w-100"
                        src="https://static.bangkokpost.com/media/content/20210105/c1_2045915.jpg"
                        alt="First slide"
                        style={styles.carouselImage}
                    />
                    <Carousel.Caption>
                        <h3 style={styles.carouselCaption}>Welcome to Our App</h3>
                        <p style={styles.carouselCaptionText}>Your one-stop solution for reporting cleanliness issues in trains.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={styles.carouselItem}>
                    <img
                        className="d-block w-100"
                        src="https://kcic.co.in/wp-content/uploads/2019/03/metrotrain_cleaning-840x453.jpg"
                        alt="Second slide"
                        style={styles.carouselImage}
                    />
                    <Carousel.Caption>
                        <h3 style={styles.carouselCaption}>Easy Reporting</h3>
                        <p style={styles.carouselCaptionText}>Report cleanliness issues in a few simple steps.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={styles.carouselItem}>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/9RhvYiiP60o/maxresdefault.jpg"
                        alt="Third slide"
                        style={styles.carouselImage}
                    />
                    <Carousel.Caption>
                        <h3 style={styles.carouselCaption}>Real-Time Updates</h3>
                        <p style={styles.carouselCaptionText}>Track the status of your complaint anytime.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Features Section */}
            <div style={styles.content}>
                <h2 style={styles.featuresTitle}>Features of the App</h2>
                <ul style={styles.featuresList}>
                    <li><strong>🚄 Easy Reporting:</strong> Report cleanliness issues in a few simple steps.</li>
                    <li><strong>📲 Real-Time Updates:</strong> Track the status of your complaint anytime.</li>
                    <li><strong>🔒 Secure Access:</strong> Register with OTP verification to ensure genuine feedback.</li>
                    <li><strong>👥 Admin Support:</strong> Our admin team actively monitors and resolves complaints.</li>
                </ul>

                <div style={styles.buttonContainer}>
                    <Link to="/user" style={{ ...styles.button, ...styles.reportButton }}>
                        Click Here To Report a Problem
                    </Link>
                </div>
            </div>

            {/* Testimonials Section */}
            <div style={styles.testimonialsSection}>
                <h2 style={styles.sectionTitle}>What Our Users Say</h2>
                <div style={styles.testimonialContainer}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={styles.testimonial}>
                            <img
                                src={testimonial.image}
                                alt={`User ${index + 1}`}
                                style={styles.testimonialImage}
                            />
                            <p><strong>{testimonial.name}</strong></p>
                            <div style={styles.stars}>
                                {[...Array(5)].map((_, starIndex) => (
                                    <FaStar key={starIndex} color="#ffc107" />
                                ))}
                            </div>
                            <p style={styles.testimonialText}>{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map and Footer Section */}
            <div style={styles.mapSection}>
                <h2 style={styles.sectionTitle}>Our Locations</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382755.82049160715!2d76.57011391727286!3d8.524139218535179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07904ad6c8b75f%3A0x199fa5b4168a0f4b!2sTrivandrum%2C%20Kerala!5e0!3m2!1sen!2sin!4v1604452721554!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={styles.map}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>

            <div style={styles.footer}>
                <p>&copy; 2024 Train Cleanliness Reporting App. All rights reserved.</p>
                <p>
                    <Link to="/contact">Contact Us</Link> | 
                    <Link to="/privacy">Privacy Policy</Link> | 
                    <Link to="/terms">Terms of Service</Link>
                </p>
                {/* Social Media Links */}
                <div style={styles.socialLinks}>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fa fa-whatsapp"></i>
                    </a>
                    {/* Add more social media links as needed */}
                </div>
            </div>
        </div>
    );
}

// Sample testimonials data
const testimonials = [
    {
        name: "Rohan Sharma",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "This app made reporting issues so easy! The response time is amazing."
    },
    {
        name: "Priya Verma",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "I was able to report and track the cleanliness issues in real-time. Highly recommend!"
    },
    {
        name: "Arjun Kumar",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        text: "The OTP verification gives a secure experience. I trust my feedback reaches the right team."
    }
];

const styles = {
    container: {
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
    },
    navbarContainer: {
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000
    },
    carousel: {
        marginTop: '56px',
        width: '100%'
    },
    carouselItem: {
        height: '500px'
    },
    carouselImage: {
        height: '100%',
        objectFit: 'cover'
    },
    carouselCaption: {
        fontSize: '2em',
        color: '#fff'
    },
    carouselCaptionText: {
        fontSize: '1.2em',
        color: '#fff'
    },
    content: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '800px',
        width: '100%',
        marginTop: '20px'
    },
    featuresTitle: {
        fontSize: '2em',
        color: '#007bff',
        marginBottom: '20px'
    },
    featuresList: {
        textAlign: 'left',
        listStyleType: 'none',
        padding: '0',
        color: '#333',
        fontSize: '1.1em'
    },
    buttonContainer: {
        marginTop: '20px'
    },
    button: {
        margin: '10px',
        padding: '12px 24px',
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
    },
    reportButton: {
        backgroundColor: '#28a745'
    },
    testimonialsSection: {
        backgroundColor: '#f8f9fa',
        padding: '40px 20px',
        width: '100%'
    },
    sectionTitle: {
        fontSize: '2.5em',
        color: '#007bff',
        marginBottom: '30px'
    },
    testimonialContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
    },
    testimonial: {
        width: '250px',
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
    },
    testimonialImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '15px'
    },
    stars: {
        marginBottom: '10px'
    },
    testimonialText: {
        fontSize: '1em',
        color: '#555'
    },
    mapSection: {
        marginTop: '40px',
        width: '100%'
    },
    map: {
        border: 'none'
    },
    footer: {
        marginTop: '40px',
        backgroundColor: '#343a40',
        color: '#fff',
        padding: '20px 0',
        width: '100%',
        textAlign: 'center'
    },
    socialLinks: {
        marginTop: '20px'
    },
    icon: {
        margin: '0 10px',
        fontSize: '30px',
        color: '#fff'
    }
};

export default HomePage;
