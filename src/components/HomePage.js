import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleFindMovieClick = () => {
        navigate('/recommendation');
    }

    return (
        <div className="homepage-container">
            <div className="homepage-box">
                <h1 className="homepage-title">Welcome to the movie recommender!</h1>
                <button className="homepage-button" onClick={handleFindMovieClick}>Find a movie</button>
            </div>
        </div>
    )
}

export default HomePage;