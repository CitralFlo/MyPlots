import './plot.css';
import {plots} from './Plot.js';
import React, {useState} from "react";


function PlotSetup(props) {
    const item = props.item;
    const [currentPlot, setCurrentPlot] = useState(0);

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

            {currentPlot > minPictures && <img src={item.links[currentPlot - 1]} alt={item.name} className="previous-pic"/>}
            <img src={item.links[currentPlot]} alt={item.name} className="picture"/>
            {currentPlot < maxPictures && <img src={item.links[currentPlot + 1]} alt={item.name} className="next-pic"/>}

            <label className="counter">{displayCurrent} / {maxPictures + 1}</label>
            <h1>Działka {item.name} nr {item.serial} </h1>
            <h2>{item.desc}</h2>
        </div>
    )
}


export const Plots = () => {
    return (
        <div className="plots-div">
            <h1 className="plots-title">Moje działki</h1>
            <p className="plots-desc">Oto stworzone moimi rękoma działki, ze specjalnie zcraftowanych pomysłów na potrzeby właściela</p>


            {plots.map((item, index) => {
                return (<PlotSetup item={item}/>);

            })}


        </div>

    )
}