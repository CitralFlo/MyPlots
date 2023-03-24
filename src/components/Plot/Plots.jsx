import './plot.css';
import {plots} from './Plot.js';
import React, {useState} from "react";



function PlotSetup(props) {
    const [currentPlot, setCurrentPlot] = useState(0);
    const maxPictures = 2, minPictures = 0;
    const nextPlot = () => {
        setCurrentPlot(currentPlot + 1);
    };

    const prevPlot = () => {
        setCurrentPlot(currentPlot - 1);
    };
    let plotImage;
    const displayCurrent = currentPlot + 1;

    return (
        <div className="single-plot">
            {currentPlot > minPictures && <button className="prev" onClick={prevPlot}>Prev</button>}
            {currentPlot < maxPictures && <button className="next" onClick={nextPlot}>Next</button>}
            <img src={props.link1} alt={props.name} className="dzialeczka1" />;

            switch (currentPlot)
            case 0:
            plotImage = <img src={props.link1} alt={props.name} className="dzialeczka1" />;
            break;
            case 1:
            plotImage = <img src={props.link2} alt={props.name} className="dzialeczka1" />;
            break;
            case 2:
            plotImage = <img src={props.link3} alt={props.name} className="dzialeczka1" />;
            break;
            default:
            plotImage = <img src={props.link1} alt={props.name} className="dzialeczka1" />;
            break;
            {plotImage}

            <label className="counter">{displayCurrent} / 3</label>

            <img src={props.link1} alt="plot" className="dzialeczka1"/>
            <h1>{props.name} - Plot {displayCurrent}</h1>
        </div>
    )
}


export const Plots = ({}) => {
    return (
        <div>
            <h1> Moje działki</h1>
            <p> Oto stworzone moimi rękoma działki, ze specjalnie zcraftowanych pomysłów na potrzeby właściela</p>

            <div className="lool">

                {plots.map((item, index) => {
                    <PlotSetup name={item.name} link1={item.link1} link2={item.link2} link3={item.link3} />

                })}

            </div>
        </div>

    )
}