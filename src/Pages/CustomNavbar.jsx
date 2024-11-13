import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Navbar.Brand as={Link} to="/" className="text-dark fw-bold" style={{ fontSize: '1.5rem' }}>
                Clean Tracks🚆:Train Cleanliness App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home" className="text-dark fw-bold">Home</Nav.Link>
                    <Nav.Link as={Link} to="/user" className="text-dark fw-bold">Report</Nav.Link>
                    <Button variant="outline-dark" className="fw-bold ms-2" onClick={handleLogout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
