import './Footer.css'

import facebook from '../../../images/Facebook.png'
import linkedin from '../../../images/Linkedin.png'
import twitter from '../../../images/Twitter.png'

export const Footer = () => {
    return (
        <>
            <footer className="divFooter">
                <h3>Juan Pablo Patiño &copy; 2021. Todos los derechos reservados.</h3>

                <div className="redes">
                    <a href="https://www.facebook.com" target="_blank" ><img src={facebook} alt="Facebook"/></a>
                    <a href="https://co.linkedin.com" target="_blank" ><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://twitter.com/?lang=es" target="_blank" ><img src={twitter} alt="Twitter"/></a>
                </div>

            </footer>
        </>
    )
}