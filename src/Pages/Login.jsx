import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is set to 'user'
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message before each login attempt
        try {
            const response = await axios.post('http://localhost:3030/signin', { email, password });
            console.log("Response data:", response.data); // Log the response for debugging

            if (response.data.status === 'success') {
                const token = response.data.token;
                localStorage.setItem('authToken', token);
                localStorage.setItem('userDetails', JSON.stringify(response.data.user)); // Store user details
                localStorage.setItem('userRole', response.data.role); // Store the role

                // Navigate based on role selection
                if (response.data.role === 'admin' && role === 'admin') {
                    navigate('/admin');
                } else if (response.data.role === 'user' && role === 'user') {
                    navigate('/user');
                } else {
                    setErrorMessage('Invalid role selection. Please check your credentials and try again.');
                }
            } else {
                setErrorMessage(response.data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login failed', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Login failed. Please try again.');
            } else {
                setErrorMessage('No response from server. Please try again later.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div style={{
            backgroundImage: 'url("https://th.bing.com/th/id/R.5b2798eb96544cd93bfd8d6b26415f3e?rik=Oa%2bWzTEYl7KDcA&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f60b6817b7761334f9798f138%2f61b0f165827a1d15cff4fdcf%2f65521ad6050ad04b71ed3da6%2f1709841481551%2fimage.jpg%3fformat%3d1500w&ehk=ncV3Ny1oQTRHLB1h8cFJNeH38r6%2bYOHiXnRPoEhw%2b40%3d&risl=&pid=ImgRaw&r=0")', // Background image
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

            {/* Login Form */}
            <div className="container mt-5"> {/* Added margin-top here */}
                <div className="card mx-auto" style={{
                    width: '400px',
                    borderRadius: '15px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)' // Added transparency
                }}>
                    <div className="card-header text-center" style={{ backgroundColor: '#4b79a1', color: '#fff', fontSize: '1.5rem', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                        Login
                    </div>
                    <div className="card-body p-4">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
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

                            {/* Role selection */}
                            <div className="form-group mt-3">
                                <label className="d-block">Select Role</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="role"
                                        value="user"
                                        checked={role === 'user'}
                                        onChange={() => setRole('user')}
                                    />
                                    <label className="form-check-label">User</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="role"
                                        value="admin"
                                        checked={role === 'admin'}
                                        onChange={() => setRole('admin')}
                                    />
                                    <label className="form-check-label">Admin</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mt-4" style={{ backgroundColor: '#4b79a1', borderColor: '#4b79a1' }}>Login</button>
                        </form>

                        <div className="text-center mt-3">
                            <button onClick={() => navigate('/')} className="btn btn-link">
                                New user? Click here to sign up
                            </button>
                        </div>

                        {/* Display the error message if there is one */}
                        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
