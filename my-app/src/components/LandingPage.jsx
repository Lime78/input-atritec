import React from 'react';
import loggavit from '../assets/loggavit.png'
import './LandingPage.css'



function LandingPage() {
    return (
        <div className="landing-page">
            
            <div className="header-row">
                <img src={loggavit} alt="Logo" className="logo" />
            </div>
            <div className="sidebar">
                <div className="sidebar-option">
                    <div className="sidebar-row"></div>
                    <a href="/cirrus" className="cirrus-info">Cirrus</a>
                    <a href="/web360" className="web360-info">Web360</a>
                    <a href="/annalering" className="contact-info">annalering</a>
                </div>
            </div>
            
        </div>
    );
}


export default LandingPage;