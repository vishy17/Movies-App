import React from 'react';
import './navBar.css'
import NavBarButtons from '../navBarButtons/navBarButtons';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="navbar">
                <img className = "logo" src="https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-png-transparent-avengers-logo-images-0.png" alt="logo"></img>
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About Us" />
            </div>
        )
    }
}

export default NavBar;
