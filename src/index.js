import React, {startTransition, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Plots from "./components/Plot/Plots";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Opensource from "./components/Opensource/Opensource";

import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            startTransition(() => {
                setIsLoading(false);
            });
        }, 1950);
    }, []);

    return (
        <React.StrictMode>

            {isLoading ? (
                <LoadingScreen/>
            ) : (
                <div>
                    <I18nextProvider i18n={i18n}>
                        <NavBar/>
                        <Plots/>
                        <About/>
                        <Footer/>
                    </I18nextProvider>
                </div>
            )}
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
