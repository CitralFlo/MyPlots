import React, {startTransition, useEffect, useState} from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Plots from "./components/Plot/Plots";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import Hero from "./components/Hero/Hero";

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);


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
                        <Hero/>
                        <Plots/>
                        <About/>
                        <Footer/>
                    </I18nextProvider>
                </div>
            )}
        </React.StrictMode>
    );
};

root.render(<App/>);

reportWebVitals();
