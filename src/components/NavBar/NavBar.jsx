import './NavBar.css';
import React, {useState, useEffect} from 'react';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export const NavBar = () => {
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const handleLogoClick = () => {
        window.location.reload();
    };

    useEffect(() => {
        function handleScroll() {
            setIsScrolledDown(window.scrollY >= 50);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleBackClick = () => {
        const backElement = document.querySelector('.navbar');
        backElement.scrollIntoView({behavior: 'smooth'});
    }

    const handleAboutClick = () => {
        const aboutElement = document.querySelector('.About');
        aboutElement.scrollIntoView({behavior: 'smooth'});
    };

    const handlePlotsClick = () => {
        const plotsElement = document.querySelector('.plots-div');
        plotsElement.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <>
            <div className="navbar">

                <img className="logo" src='assets/NavBar/logoCitralFLo.png' alt="CitralFlo420"
                     onClick={handleLogoClick}/>
                <button className="nav-button" onClick={handlePlotsClick}>Plots</button>
                <button className="nav-button" onClick={handleAboutClick}>About</button>

                <ThemeSwitch/>


            </div>
            {isScrolledDown && <button onClick={handleBackClick} className="backButton">
                <img className="arrowUp"
                     src="assets/NavBar/arrow.png"
                     alt="arrow" style={{width: "30px", height: "30px"}}
                     onClick={handleBackClick}
                />
            </button>}
        </>
    )
}

export default NavBar;
