import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';  // Import your Custom Navbar

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            alert('Network error. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            {/* Fixed Navbar */}
            <div style={styles.navbarContainer}>
                <CustomNavbar />
            </div>

            {/* Contact Form */}
            <div style={styles.content}>
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Please fill out the form below to get in touch with us:</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="message" style={styles.label}>Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        ></textarea>
                    </div>

                    <button type="submit" style={styles.button}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    navbarContainer: {
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    container: {
        marginTop: '80px', // Adjust based on navbar height
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
    content: {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    label: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '1em',
    },
    input: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    textarea: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        resize: 'vertical',
        minHeight: '100px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1em',
        cursor: 'pointer',
    },
};

export default ContactUs;
