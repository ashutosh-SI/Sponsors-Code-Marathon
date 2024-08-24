// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'



const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/matches">Matches</Link>
                </li>
                <li>
                    <Link to="/payment-summary">Payment Summary</Link>
                </li>
                <li>
                    <Link to="/add-payment">Add Product</Link>
                </li>
                <li>
                    <Link to="/sponsor-match-count">Sponsor Match Count</Link>
                </li>
            </ul>
        </nav>
    );
};



export default Navbar;
