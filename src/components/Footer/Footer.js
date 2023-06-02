import './Footer.css';
import {useRef, useState} from "react";

export const Footer = () => {

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
                <h3 onClick={() => setActive(!active)}>Linki {active ? "▽" : "△"}</h3>
                <ul className={`'Link-list ${active ? "" : "active"}`}>
                    <li>
                        <a href="https://github.com/CitralFlo" target="_blank" className="Link-element" rel="noopener noreferrer">
                            <img src="/assets/Footer/github.svg" alt="GitHub" className="icon-img"/>
                            GitHub
                        </a>

                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/micha%C5%82-wojtas-5a0663228/" target="_blank" className="Link-element" rel="noopener noreferrer">
                            <img src="/assets/Footer/linkedin.svg" alt="LinkedIn" className="icon-img"/>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/citralflo/" target="_blank" className="Link-element" rel="noopener noreferrer">
                            <img src="/assets/Footer/instagram.svg" alt="Instagram" className="icon-img"/>
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>

            <div className="Footer-credits">
                <p>2023 CitralFlo | Wysztkie prawa zastrzeżone</p>
            </div>

            <div className="Footer-back-button">
                <h3>To wszystko</h3>
                <button className="Footer-button" onClick={scrollToTop}>Wróć na górę</button>
            </div>


        </div>
    )
}

export default Footer;