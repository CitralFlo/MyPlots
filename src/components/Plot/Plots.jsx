import './plot.css';
import { plots } from './Plot.js';

function PlotSetup(props) {
    return (
        <div className="single-plot">
            <button className="next" >Next</button>
            <img src={props.img} alt="plot" className="dzialeczka1"/>
            <h1>{props.name}</h1>
        </div>
    )
}



export const Plots = () => {
    return (
        <div>
            <h1>Polska gora</h1>
            <h2>How high?</h2>
            <div className="lool">
                <img className="dzialka" src="assets/plot-junglewoods.png" alt="junglewoods"/>
                <img className="dzialka" src="assets/plot-waski021.png" alt="junglewoods"/>
            </div>
            <h1> Próba Reacta</h1>



            <div className="lool">
                {plots.map((item, index) => (
                    <PlotSetup key={index} img={item.img} name={item.name }/>
                ))}
            </div>
        </div>

    )
}