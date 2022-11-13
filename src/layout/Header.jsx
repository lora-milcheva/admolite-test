import React from "react";

// Components
import Navigation from "../components/Navigation";

const Header = props => {

    return (
        <header className='header'>
            <div className='header__brand'>
                <p>My travel blog</p>
            </div>
            <Navigation/>
        </header>
    )

}

export default Header