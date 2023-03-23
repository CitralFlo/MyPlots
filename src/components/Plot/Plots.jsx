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

    const displayCurrent = currentPlot + 1;
    return (
        <div className="single-plot">
            {currentPlot > minPictures && <button className="prev" onClick={prevPlot}>Prev</button>}
            {currentPlot < maxPictures && <button className="next" onClick={nextPlot}>Next</button>}

            <label>{displayCurrent} / 3</label>
            <img src={props.img} alt="plot" className="dzialeczka1"/>
            <h1>{props.name} - Plot {displayCurrent}</h1>
        </div>
    )
}


export const Plots = () => {
    return (
        <div>
            <h1> Moje działki</h1>
            <p> Oto stworzone moimi rękoma działki, ze specjalnie zcraftowanych pomysłów na potrzeby właściela</p>

            <div className="lool">

                {plots.map((item, index) => (

                    switch (currentPlot) {
                    case
                        '0'
                    :
                        return <PlotSetup key={index} img={item.link1} name={item.name}/>
                    case
                        '1'
                    :
                        return <PlotSetup key={index} img={item.link2} name={item.name}/>
                    case
                        '2'
                    :
                        return <PlotSetup key={index} img={item.link3} name={item.name}/>
                    default:
                        return <PlotSetup key={index} img={item.link1} name={item.name}/>

                ))}

            </div>
        </div>

    )
}