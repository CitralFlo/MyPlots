import React, {useEffect, useState} from "react";
import "./ThemeSwitch.css";

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = useState("");

    useEffect(() => {
        toggleDarkMode();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }

    useEffect(() => {
        applyTheme(theme);
    }, []);

    const applyTheme = (currentTheme) => {
        document.body.classList.remove("red", "blue", "green", "yellow", "purple");
        document.body.classList.add(currentTheme);
    };

    function changeTheme(theme) {
        applyTheme(theme);
    }





    return (
        <div className="light-dark-mode">
            <div className="light-dark-mode-text">
                <h2>Tryb jasny/ciemny</h2>
                <p>Strona posiada tryb jasny i ciemny. Możesz zmienić go klikając w przycisk poniżej.</p>
            </div>
            <div className="light-dark-mode-button">
                <button onClick={toggleDarkMode} className="light-dark-mode-button-dark">Ciemny</button>
            </div>
            <div className={"accents-buttons"}>
                <button className={"accents-buttons-button"} onClick={ changeTheme("red") }>Czerwony</button>
                <button className={"accents-buttons-button"} onClick={ changeTheme("blue") }>Niebieski</button>
                <button className={"accents-buttons-button"}>Zielony</button>
                <button className={"accents-buttons-button"}>Żółty</button>
                <button className={"accents-buttons-button"}>Fioletowy</button>
            </div>
        </div>
    );
}

export default ThemeSwitch;