import './plot.css';
import PopupPicture from "./Popup/PopupPicture";
import {plots} from './Plot.js';
import React, {useState} from "react";
import { useTranslation } from 'react-i18next';


function PlotSetup(props) {
    const { t } = useTranslation();
    const item = props.item;
    const [currentPlot, setCurrentPlot] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const minPictures = 0, maxPictures = item.links.length - 1;

    const nextPlot = () => {
        setCurrentPlot(currentPlot + 1);
    };

    const prevPlot = () => {
        setCurrentPlot(currentPlot - 1);
    };
    const displayCurrent = currentPlot + 1;


    return (

        <div className="single-plot">

            {currentPlot > minPictures && <button className="prev" onClick={prevPlot}>&lt;</button>}
            {currentPlot < maxPictures && <button className="next" onClick={nextPlot}>&gt;</button>}

            <div style={{position: 'relative', margin: '0', padding: '0'}}>
                <img src={item.links[currentPlot]}
                     alt={item.name}
                     className="picture"

                     onLoad={() => setIsLoading(false)}
                     onError={() => setIsLoading(false)}
                     onClick={() => setIsOpen(true)}
                />
                <div className="preload-images">
                    {item.links.map((link, index) => (
                        <img src={link} alt={`Preloaded ${index + 1}`} key={index} />
                    ))}
                </div>
                {isLoading && <div className="spinner show"/>}
            </div>


            <label className="counter">{displayCurrent} / {maxPictures + 1}</label>
            <h1 className="plot-title">{t(`Plots.Plot`)} {item.name} {t(`Plots.Number`)} {item.serial}</h1>
            <h2 className="plot-desc">{t(`Plots.${item.name}`)}</h2>


            <PopupPicture open={isOpen} onClose={() => setIsOpen(false)}>
                {currentPlot > minPictures && <button className="prev" onClick={prevPlot}>&lt;</button>}
                {currentPlot < maxPictures && <button className="next" onClick={nextPlot}>&gt;</button>}

                <div style={{position: 'relative', margin: '0, 0, 0, 0', padding: '0'}}>
                    < img src={item.links[currentPlot]} alt={item.name} loading="lazy" className="popup-pic"
                          onClick={() => setIsOpen(true)}
                          onLoad={() => setIsLoading(false)}
                          onError={() => setIsLoading(false)}
                    />
                    {isLoading && <div className="spinner show"/>}
                </div>
                <label className="counter">{displayCurrent} / {maxPictures + 1}</label>
                <h1 className="popup-title">{item.name}</h1>
            </PopupPicture>

        </div>
    )
}


const Plots = () => {
    const { t } = useTranslation();
    return (
        <div className="plots-div">
            <h1 className="plots-title">{t('Plots.Title')}</h1>
            <p className="plots-desc">{t('Plots.Description')}</p>

            <div className="plots">
                {plots.map((item, index) => {
                    return (<PlotSetup item={item} key={index}/>);

                })}
            </div>

        </div>

    )
}

export default Plots;