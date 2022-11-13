import { useRef } from "react";
import {NavLink} from "react-router-dom";


const Navigation = props => {

    const menu = useRef();

    const showHideMenu = () => {
        if (menu.current.classList.contains('open')) {
            menu.current.classList.remove('open')
        } else {
            menu.current.classList.add('open')
        }
    }

    return (
        <nav className='navigation'>

            <button id="toggle-menu-btn" className="btn navigation__button" onClick={showHideMenu}>
                <span className="toggle"/>
                <span className="toggle"/>
                <span className="toggle"/>
            </button>

            <ul className='navigation__list' ref={menu} onClick={showHideMenu}>
                <li className='navigation__item'>
                    <NavLink to="/" className='navigation__link'>Home</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/about" className='navigation__link'>About</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/gallery" className='navigation__link'>Gallery</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to="/contact" className='navigation__link'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation