import './plot.css';

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
            <div className="plot">
                <img src={'/assets/plot-waski021.png'} alt="plot" className="dzialeczka1"/>
            </div>
        </div>

    )
}