import React, { Component } from 'react';
import './Style/Navbar.css';
import { Link } from "react-router-dom";



class Navbar extends Component {

render () {
    return (
        <nav className="navbar bg-slate-800">
            <div className="all-nav">
                <div className="buttons-box">
                    <ul className="nav-btns">
                        <li>
                            <Link to="/" className="nav-btn block text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/searchrobots" className="nav-btn block text-gray-400">Search Robots</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-btn block text-gray-400">About</Link>
                        </li>
                    </ul>
                </div>


            </div>

        </nav>
    );
}
}

export default Navbar;