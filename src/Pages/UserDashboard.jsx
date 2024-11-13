import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar';

function UserDashboard() {
    const [report, setReport] = useState({
        trainName: '',
        trainNumber: '',
        coachNumber: '',
        issue: '',
        time: '',
        location: '',
        trainDetails: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const validateForm = () => {
        if (!report.trainName || !report.trainNumber || !report.coachNumber || !report.issue || !report.time || !report.location) {
            setMessage("All fields are required.");
            return false;
        }
        return true;
    };

    const submitReport = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const token = localStorage.getItem('authToken');
        if (!token) {
            setMessage("Authorization error. Please log in again.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3030/report', report, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 201) {
                setMessage('Report submitted successfully');
                setReport({
                    trainName: '',
                    trainNumber: '',
                    coachNumber: '',
                    issue: '',
                    time: '',
                    location: '',
                    trainDetails: ''
                });
            }
        } catch (error) {
            setMessage(error.response?.data.message || 'Failed to submit report. Please try again.');
        }
    };

    return (
        <div style={{
            backgroundImage: 'url("https://kcic.co.in/wp-content/uploads/2019/03/metrotrain_cleaning.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <CustomNavbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg" style={{
                            borderRadius: '15px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)'
                        }}>
                            <div className="card-header bg-primary text-white text-center" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                                <h3>Report Cleanliness Issue</h3>
                            </div>
                            <div className="card-body">
                                {message && (
                                    <div className={`alert ${message.includes("successfully") ? 'alert-success' : 'alert-danger'}`} role="alert">
                                        {message}
                                    </div>
                                )}
                                <form onSubmit={submitReport}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="trainName">Train Name</label>
                                        <select
                                            className="form-control"
                                            id="trainName"
                                            value={report.trainName}
                                            onChange={(e) => setReport({ ...report, trainName: e.target.value })}
                                            required
                                        >
                                            <option value="">Select Train Name</option>
                                            <option value="Rajdhani Express">Rajdhani Express</option>
                                            <option value="Shatabdi Express">Shatabdi Express</option>
                                            <option value="Duronto Express">Duronto Express</option>
                                            <option value="Garib Rath Express">Garib Rath Express</option>
                                            <option value="Jan Shatabdi Express">Jan Shatabdi Express</option>
                                            {/* Add more train names as needed */}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="trainNumber">Train Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="trainNumber"
                                            placeholder="Enter Train Number"
                                            value={report.trainNumber}
                                            onChange={(e) => setReport({ ...report, trainNumber: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="coachNumber">Coach Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="coachNumber"
                                            placeholder="Enter Coach Number"
                                            value={report.coachNumber}
                                            onChange={(e) => setReport({ ...report, coachNumber: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="issue">Issue Description</label>
                                        <textarea
                                            className="form-control"
                                            id="issue"
                                            rows="3"
                                            placeholder="Describe the issue"
                                            value={report.issue}
                                            onChange={(e) => setReport({ ...report, issue: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="time">Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="time"
                                            value={report.time}
                                            onChange={(e) => setReport({ ...report, time: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="location">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            placeholder="Enter Location"
                                            value={report.location}
                                            onChange={(e) => setReport({ ...report, location: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="trainDetails">Additional Train Details</label>
                                        <textarea
                                            className="form-control"
                                            id="trainDetails"
                                            rows="3"
                                            placeholder="Enter additional train details (optional)"
                                            value={report.trainDetails}
                                            onChange={(e) => setReport({ ...report, trainDetails: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Submit Report
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
