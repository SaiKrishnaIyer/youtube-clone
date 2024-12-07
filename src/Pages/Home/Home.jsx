 
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {
    // State for category selection
    const [category, setCategory] = useState(0);

    return (
        <>
            {/* Sidebar Component */}
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            
            {/* Main Content Container */}
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                <Feed category={category} />
            </div>
        </>
    );
};

// Prop validation
Home.propTypes = {
    sidebar: PropTypes.bool.isRequired,
};

export default Home;
