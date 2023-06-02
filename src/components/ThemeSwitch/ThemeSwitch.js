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
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    }

    useEffect(() => {
        applyTheme(theme);
    }, []);

    const applyTheme = (currentTheme) => {
        if (currentTheme) {
            document.body.classList.remove("red", "indigo", "salmon", "purple");
            document.body.classList.add(currentTheme);
        } else {
            document.body.classList.remove("red", "indigo", "salmon", "purple");
        }
    };

    function changeTheme(theme) {
        applyTheme(theme);
    }


    return (
        <div>
            <div className="theme-switch">
                <button onClick={toggleDarkMode} className="dark-toggle"></button>
            </div>
            <div className={"accents-buttons"}>
                <button className="accents-button red" onClick={() => changeTheme("red")}>Red</button>
                <button className="accents-button indigo" onClick={() => changeTheme("indigo")}>Indigo</button>
                <button className="accents-button salmon" onClick={() => changeTheme("salmon")}>Salmon</button>
                <button className="accents-button purple" onClick={() => changeTheme("purple")}>Purple</button>
                <button className="accents-button clear" onClick={() => changeTheme("")}>Clear</button>
            </div>
        </div>
    );
}

export default ThemeSwitch;