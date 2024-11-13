import React from 'react';
import CustomNavbar from './CustomNavbar';  // Assuming your navbar is in the CustomNavbar component

function PrivacyPolicy() {
    return (
        <div style={styles.container}>
            <div style={styles.navbarContainer}>
                <CustomNavbar />
            </div>

            <div style={styles.content}>
                <h1 style={styles.heading}>Privacy Policy</h1>

                <p style={styles.paragraph}>
                    At Train Cleanliness Quality Reporting App, we respect and protect your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services.
                </p>

                <h2 style={styles.subHeading}>Information We Collect</h2>
                <p style={styles.paragraph}>
                    We collect personal information when you register on our platform or submit a complaint. The information may include:
                </p>
                <ul style={styles.list}>
                    <li><strong>Personal Identification Information:</strong> Your name, email address, mobile number, and PNR number.</li>
                    <li><strong>Complaint Information:</strong> Details about cleanliness issues reported, including the train details, time, and location.</li>
                    <li><strong>OTP Verification:</strong> We use OTP for verifying your identity during registration and login.</li>
                </ul>

                <h2 style={styles.subHeading}>How We Use Your Information</h2>
                <p style={styles.paragraph}>
                    We use the information we collect to:
                </p>
                <ul style={styles.list}>
                    <li>Process your complaints regarding cleanliness issues in trains.</li>
                    <li>Verify your identity through OTP for registration and login.</li>
                    <li>Provide real-time updates on the status of your complaints.</li>
                    <li>Improve our services and respond to your feedback or queries.</li>
                </ul>

                <h2 style={styles.subHeading}>How We Protect Your Information</h2>
                <p style={styles.paragraph}>
                    We implement appropriate technical and organizational security measures to safeguard your personal information. We use encryption, secure data storage, and access control mechanisms to protect your data from unauthorized access, alteration, or disclosure.
                </p>

                <h2 style={styles.subHeading}>Sharing Your Information</h2>
                <p style={styles.paragraph}>
                    We do not sell, trade, or otherwise transfer your personal information to third parties unless required by law or for the purpose of delivering our services. We may share your information with:
                </p>
                <ul style={styles.list}>
                    <li><strong>Admins:</strong> The admin may access your information for complaint resolution purposes.</li>
                    <li><strong>Law Enforcement:</strong> If required by law, we may disclose your information to authorities.</li>
                </ul>

                <h2 style={styles.subHeading}>Cookies</h2>
                <p style={styles.paragraph}>
                    Our platform may use cookies to enhance your user experience. Cookies help us remember your preferences, improve site performance, and offer personalized content. You can choose to disable cookies in your browser settings, but this may affect your user experience.
                </p>

                <h2 style={styles.subHeading}>Your Rights</h2>
                <p style={styles.paragraph}>
                    You have the right to:
                </p>
                <ul style={styles.list}>
                    <li>Request access to your personal information.</li>
                    <li>Request correction of your personal information.</li>
                    <li>Request deletion of your personal information.</li>
                    <li>Withdraw your consent for processing your personal information at any time.</li>
                </ul>

                <h2 style={styles.subHeading}>Changes to This Privacy Policy</h2>
                <p style={styles.paragraph}>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>

                <h2 style={styles.subHeading}>Contact Us</h2>
                <p style={styles.paragraph}>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at <strong>support@trainapp.com</strong>.
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
    navbarContainer: {
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
    },
    content: {
        width: '80%',
        maxWidth: '800px',
        marginTop: '80px',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '2.5em',
        color: '#007bff',
        marginBottom: '20px',
    },
    subHeading: {
        fontSize: '2em',
        color: '#007bff',
        marginTop: '20px',
    },
    paragraph: {
        fontSize: '1.1em',
        color: '#555',
        lineHeight: '1.6',
    },
    list: {
        textAlign: 'left',
        listStyleType: 'none',
        paddingLeft: '0',
        fontSize: '1.1em',
        color: '#555',
    },
};

export default PrivacyPolicy;
