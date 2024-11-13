import React from 'react';
import CustomNavbar from './CustomNavbar';  // Import the Navbar

function TermsOfService() {
    return (
        <div>
            {/* Full-width Navbar */}
            <div style={styles.navbarContainer}>
                <CustomNavbar /> {/* Display the Custom Navbar */}
            </div>

            {/* Terms of Service Content */}
            <div style={styles.content}>
                <h1>Terms of Service</h1>
                <p>Welcome to our Terms of Service. By using our services, you agree to the following terms and conditions:</p>
                <ul style={styles.termsList}>
                    <li><strong>Service Use:</strong> You agree to use the service only for lawful purposes.</li>
                    <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account.</li>
                    <li><strong>Limitation of Liability:</strong> We are not liable for any indirect, incidental, or consequential damages arising from the use of the service.</li>
                    <li><strong>Changes to Terms:</strong> We reserve the right to modify the terms at any time.</li>
                    {/* Add more terms as needed */}
                </ul>
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
        zIndex: 1000,  // Ensures navbar stays on top of other content
    },
    content: {
        marginTop: '80px', // To avoid content overlap with navbar
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
    termsList: {
        textAlign: 'left',
        listStyleType: 'none',
        padding: '0',
        fontSize: '1.1em',
    },
};

export default TermsOfService;
