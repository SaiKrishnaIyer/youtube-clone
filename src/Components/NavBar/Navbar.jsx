// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/Jack.png';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Navbar = ({ setSidebar }) => {
    return (
        <nav className="flex-div navbar">
            {/* Left Section */}
            <div className="nav-left flex-div">
                <img
                    className="menu-icon"
                    onClick={() => setSidebar((prev) => !prev)} // Simplified toggle logic
                    src={menu_icon}
                    alt="Menu"
                />
                <a href="/"><img className="logo" src={logo} alt="Logo" /></a>
            </div>

            {/* Middle Section */}
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search" // Added accessibility label
                    />
                    <img src={search_icon} alt="Search" />
                </div>
            </div>

            {/* Right Section */}
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="Upload" />
                <img src={more_icon} alt="More Options" />
                <img src={notification_icon} alt="Notifications" />
                <img src={profile_icon} className="user-icon" alt="User Profile" />
            </div>
        </nav>
    );
};

export default Navbar;
