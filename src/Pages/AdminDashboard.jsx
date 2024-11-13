import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Import a CSS file for custom styling

function AdminDashboard() {
    const [reports, setReports] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState('home');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:3030/admin/users', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setMessage('Failed to fetch users. Please check your admin permissions.');
            }
        };

        const fetchReports = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:3030/admin/reports', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
                setMessage('Failed to fetch reports.');
            }
        };

        if (currentPage === 'users') fetchUsers();
        if (currentPage === 'reports') fetchReports();
    }, [currentPage]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/';
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:3030/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
            });
            setUsers(users.filter(user => user._id !== userId));
            setMessage('User deleted successfully.');
        } catch (error) {
            console.error("Failed to delete user:", error);
            setMessage('Failed to delete user.');
        }
    };

    const updateReportStatus = async (reportId, newStatus) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`http://localhost:3030/admin/reports/${reportId}`, 
                { status: newStatus }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReports(reports.map(report => 
                report._id === reportId ? { ...report, status: newStatus } : report
            ));
        } catch (error) {
            console.error("Failed to update report status:", error);
        }
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'users':
                return (
                    <div>
                        <h2>Registered Users</h2>
                        {message && <p className="text-danger">{message}</p>}
                        <table className="table table-striped table-custom">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name || 'Anonymous User'}</td>
                                            <td>{user.email || 'No email on record'}</td>
                                            <td>{user.phone || 'Not provided'}</td>
                                            <td>
                                                <button onClick={() => deleteUser(user._id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">No users available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                );
            case 'reports':
                return (
                    <div>
                        <h2>Reports</h2>
                        {message && <p className="text-danger">{message}</p>}
                        <table className="table table-striped table-custom">
                            <thead>
                                <tr>
                                    <th>Train Number</th>
                                    <th>Train Name</th>
                                    <th>Coach Number</th>
                                    <th>Issue</th>
                                    <th>Status</th> {/* New column for status update */}
                                    <th>Submitted By</th>
                                    <th>User Email</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.length > 0 ? (
                                    reports.map(report => (
                                        <tr key={report._id}>
                                            <td>{report.trainNumber}</td>
                                            <td>{report.trainName || 'Unknown'}</td>
                                            <td>{report.coachNumber}</td>
                                            <td>{report.issue}</td>
                                            <td>
                                                {/* Select dropdown for status update */}
                                                <select 
                                                    value={report.status} 
                                                    onChange={(e) => updateReportStatus(report._id, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Resolved">Resolved</option>
                                                </select>
                                            </td>
                                            <td>{report.userId ? report.userId.name || 'Anonymous User' : 'Unknown'}</td>
                                            <td>{report.userId ? report.userId.email || 'No email on record' : 'Unknown'}</td>
                                            <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8">No reports available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                );
            case 'home':
            default:
                return (
                    
                        <div>
                        <h2>Welcome to the Admin Dashboard</h2>
                        <p>Manage and view all information related to users, reports, and system status.</p>

                        <h3>Cleaning Shifts</h3>
                        <table className="table table-striped table-custom">
                            <thead>
                                <tr>
                                    <th>Shift</th>
                                    <th>Time</th>
                                    <th>Assigned Personnel</th>
                                    <th>Area Covered</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Morning</td>
                                    <td>6:00 AM - 2:00 PM</td>
                                    <td>John Doe</td>
                                    <td>Entire train</td>
                                </tr>
                                <tr>
                                    <td>Evening</td>
                                    <td>2:00 PM - 10:00 PM</td>
                                    <td>Jane Smith</td>
                                    <td>Entire train</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Train Details</h3>
                        <table className="table table-striped table-custom">
                            <thead>
                                <tr>
                                    <th>Train Number</th>
                                    <th>Type</th>
                                    <th>Route</th>
                                    <th>Last Cleaned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12345</td>
                                    <td>Express</td>
                                    <td>City A - City B</td>
                                    <td>Yesterday</td>
                                </tr>
                                <tr>
                                    <td>67890</td>
                                    <td>Local</td>
                                    <td>City C - City D</td>
                                    <td>Today</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                );
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <button className="btn btn-link text-light nav-link-custom" onClick={() => setCurrentPage('home')}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link text-light nav-link-custom" onClick={() => setCurrentPage('users')}>View Users</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link text-light nav-link-custom" onClick={() => setCurrentPage('reports')}>Reports</button>
                    </li>
                </ul>
                <button className="btn btn-danger ml-auto" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="container mt-4">
                <h1 className="dashboard-header">Admin Dashboard</h1>
                {renderContent()}
            </div>
        </div>
    );
}

export default AdminDashboard;
