import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <section className="load-img">
                <img className="loading-logo" src="/assets/navbar/logoCitralFlo.png" alt="CitralFlo Logo"/>
                <div className="loading-bar">
                    <div className="progress-value"></div>
                </div>
            </section>
        </div>
    );
};

export default LoadingScreen;