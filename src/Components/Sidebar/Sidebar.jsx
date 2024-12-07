// Sidebar.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobile from '../../assets/car.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogging.png';
import news from '../../assets/news.png';
import jack from '../../assets/Jack.png';
import simon from '../../assets/Simon.png';
import megan from '../../assets/megan.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                {[
                    { id: 0, icon: home, label: 'Home' },
                    { id: 20, icon: game_icon, label: 'Gaming' },
                    { id: 2, icon: automobile, label: 'Automobiles' },
                    { id: 17, icon: sports, label: 'Sports' },
                    { id: 24, icon: entertainment, label: 'Entertainment' },
                    { id: 28, icon: tech, label: 'Technology' },
                    { id: 10, icon: music, label: 'Music' },
                    { id: 22, icon: blogs, label: 'Blogs' },
                    { id: 25, icon: news, label: 'News' },
                ].map(({ id, icon, label }) => (
                    <div
                        key={id}
                        className={`side-link ${category === id ? "active" : ""}`}
                        onClick={() => setCategory(id)}
                    >
                        <img src={icon} alt={`${label} icon`} />
                        <p>{label}</p>
                    </div>
                ))}
                <hr />
            </div>
            <div className="Subscribed-list">
                <h3>Subscribed</h3>
                {[
                    { img: jack, name: 'PewDiePie' },
                    { img: simon, name: 'Mr Beast' },
                    { img: megan, name: 'Craft' },
                ].map(({ img, name }, index) => (
                    <div key={index} className="side-link">
                        <img src={img} alt={`${name}'s profile`} />
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    category: PropTypes.number.isRequired,
    setCategory: PropTypes.func.isRequired,
};

export default Sidebar;
