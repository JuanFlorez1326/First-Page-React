import './Card.css'
import imagen1 from '../../../images/card1.png'
import imagen2 from '../../../images/card2.png'

export const Card = () => {
    return (
        <>
            <div className="gridCards">
                <div className="cardJs">
                    <h2>React</h2>
                    <img className="classReact" src={imagen1} alt="React"/>
                </div>
                <div className="cardJs">
                    <h2>Javascript</h2>
                    <img className="classReact" src={imagen2} alt="Javascript"/>
                </div>
            </div>
        </>
    )
}