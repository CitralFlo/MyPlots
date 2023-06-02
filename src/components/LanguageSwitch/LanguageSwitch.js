import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FaLanguage} from 'react-icons/fa';
import './LanguageSwitch.css';
import {HiChevronDoubleDown} from "react-icons/hi";


const LanguageSwitch = () => {
    const {i18n} = useTranslation();
    const [active, setActive] = useState(true);

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };


    return (
        <div className="LanguageSwitch">
            <button className="language-button" onClick={() => setActive(!active)}>
                <FaLanguage className="switch-icon"/>
                <HiChevronDoubleDown className={`switch-arrow ${active ? "" : "active"}`}/>
            </button>
            <div className={`language-list ${active ? "" : "active"}`}>
                <button onClick={() => handleLanguageChange('pl')}>
                    <div className="flag-stripe" style={{backgroundColor: '#fff'}}></div>
                    <div className="flag-stripe" style={{backgroundColor: '#dc143c'}}></div>
                </button>
                <button onClick={() => handleLanguageChange('en')}>
                    <img src={'/assets/NavBar/uk.png'} alt="UK flag" className="flag-img"/>

                </button>

            </div>


        </div>
    );
};

export default LanguageSwitch;