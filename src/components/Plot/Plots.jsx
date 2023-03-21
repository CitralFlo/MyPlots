import './plot.css';
import {plots} from './Plot.js';

function PlotSetup(props) {
    return (
        <div className="single-plot">
            <button className="next">Next</button>
            <img src={props.img} alt="plot" className="dzialeczka1"/>
            <h1>{props.name}</h1>
        </div>
    )
}


export const Plots = () => {
    return (
        <div>
            <h1> Moje działki</h1>
            <p> Oto stworzone moimi rękoma działki, ze specjalnie zcraftowanych pomysłów na potrzeby właściela</p>

            //musze rozdzielic wszystkie ploty o tym samym numerze seryjnym do tych samych okienek, w taki sposób uzyskam grupy działek tego samego właściciela
            <div className="lool">

                {plots.map((item, index) => (

                    <PlotSetup key={index} img={item.img} name={item.name}/>
                ))}

            </div>
        </div>

    )
}