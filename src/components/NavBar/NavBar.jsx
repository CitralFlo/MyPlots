import './NavBar.css';
import React, {useState, useEffect} from 'react';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import {useTranslation} from 'react-i18next';
import {FiSettings} from "react-icons/fi";
import {RxCross2} from "react-icons/rx";


export const NavBar = () => {
    const {t} = useTranslation();
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [active, setActive] = useState(true);
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

                <img className="logo" src='/assets/NavBar/logoCitralFLo.png' alt="CitralFlo420"
                     onClick={handleLogoClick}/>
                <FiSettings className={`settings-icon ${active ? "" : "active"}`} onClick={() => setActive(!active)}/>
                <div className={`settings-menu ${active ? "" : "active"}`}>
                    <button className="nav-button" onClick={handlePlotsClick}>{t('NavBar.Plots')}</button>
                    <button className="nav-button" onClick={handleAboutClick}>{t('NavBar.About')}</button>
                    <div className="theme">
                        <ThemeSwitch/>
                    </div>
                    <div className="language">
                        <LanguageSwitch/>
                    </div>
                    <RxCross2 className={`cross ${active ? "" : "active"}`} onClick={() => setActive(!active)}/>
                </div>
            </div>
            {isScrolledDown && <button onClick={handleBackClick} className="backButton">
                <img className="arrowUp"
                     src="/assets/NavBar/arrow.png"
                     alt="arrow" style={{width: "30px", height: "30px"}}
                     onClick={handleBackClick}
                />
            </button>}
        </>
    )
}

export default NavBar;
