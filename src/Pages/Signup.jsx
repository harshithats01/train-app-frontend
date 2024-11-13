import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:3030/signup', {
                name,
                email,
                password,
                phone
            });
            alert(response.data.message);
            setOtpSent(true);
        } catch (error) {
            setErrorMessage(error.response?.data?.errorMessage || 'An error occurred during signup.');
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:3030/verify-otp', {
                email,
                otp
            });
            alert(response.data.message);
            setOtpVerified(true);
            setOtp(''); // Clear OTP input field
            // Clear signup fields only after OTP is verified
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'An error occurred during OTP verification.');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Ensure this route matches your application's login page route
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div style={{
            backgroundImage: 'url("https://hdqwalls.com/download/train-rail-5k-gv-1920x1080.jpg")', // Background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" style={{ fontWeight: 'bold' }}>Train Cleanliness Reporting App</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/* Signup Form */}
            <div className="container mt-5"> {/* Added margin-top here */}
                <div className="card mx-auto" style={{
                    width: '400px',
                    borderRadius: '15px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)' // Added transparency
                }}>
                    <div className="card-header text-center" style={{ backgroundColor: '#ff7f50', color: '#fff', fontSize: '1.5rem', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                        Signup
                    </div>
                    <div className="card-body p-4">
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3 position-relative"> {/* Added position-relative for icon placement */}
                                <label>Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="position-absolute"
                                    style={{ right: '10px', top: '30px', border: 'none', background: 'none', cursor: 'pointer' }}
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show/Hide Icon */}
                                </button>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-4">Register</button>
                        </form>

                        {otpSent && !otpVerified && (
                            <form onSubmit={handleVerifyOtp} className="mt-3">
                                <div className="form-group">
                                    <label>Enter OTP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success btn-block mt-3">Verify OTP</button>
                            </form>
                        )}

                        {otpVerified && (
                            <div className="mt-3 text-center">
                                <p className="text-success">OTP verified successfully!</p>
                                <button onClick={handleLoginRedirect} className="btn btn-link">Click here to login</button>
                            </div>
                        )}

                        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}

                        {/* Link to login */}
                        <p className="text-center mt-3">
                            Already have an account?
                            <button onClick={handleLoginRedirect} className="btn btn-link"> Login</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
