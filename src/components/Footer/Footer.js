import './Footer.css';
import {useRef, useState} from "react";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const [active, setActive] = useState(true);

    return (
        <div className="Footer">
            <div className="Links">
                <h3 className="links-button" > {t('Footer.Links')} </h3>

                <a href="https://github.com/CitralFlo" target="_blank" className="Link-element"
                   rel="noopener noreferrer">
                    <img src="/assets/Footer/github.svg" alt="GitHub" className="icon-img" />
                    <span className={"button-text"}>GitHub</span>
                </a>


                <a href="https://www.linkedin.com/in/citralflo/" target="_blank"
                   className="Link-element" rel="noopener noreferrer">
                    <img src="/assets/Footer/linkedin.svg" alt="LinkedIn" className="icon-img" />
                    <span className={"button-text"}>LinkedIn</span>
                </a>

                <a href="https://www.instagram.com/citralflo/" target="_blank" className="Link-element"
                   rel="noopener noreferrer">
                    <img src="/assets/Footer/instagram.svg" alt="Instagram" className="icon-img" />
                    <span className={"button-text"}>Instagram</span>
                </a>

            </div>

            <div className="Footer-credits">
                <p>{t('Footer.Copywrite')}</p>
            </div>

            <div className="Footer-back-button">
                <h3>{t('Footer.All')}</h3>
                <button className="Footer-button" onClick={scrollToTop}>{t('Footer.Back')}</button>
            </div>


        </div>
    )
}

export default Footer;