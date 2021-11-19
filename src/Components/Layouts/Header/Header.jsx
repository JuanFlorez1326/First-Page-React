import './Header.css'
import {Logo} from '../../UI/Logo/Logo'
import {Menu} from '../../UI/Menu/Menu'
import { Main } from '../../UI/Main1/Main1'
import { Card } from '../../UI/Card/Card'
import { Footer } from '../../UI/Footer/Footer'

export const Header = () => {
    return (
        <>
            <div className="divHeader">
                <Logo/>
                <Menu/>
                
            </div>
            <div className="divMain">
                <Main/>
            </div>
            <div className="divCard">
                <Card/>
            </div>
            <div className="divFooter">
                <Footer/>
            </div>
        </>
    )
}