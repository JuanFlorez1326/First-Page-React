import './Logo.css'
import image1 from '../../../images/1.png'

export const Logo = () => {
    return (
      <>
        <div className="container">
          <div className="divLogo">
            <img className="imgLogo" src={image1} alt="Image1"/>
          </div>
        </div> 
      </>
    );
}
