import React from 'react';
import "./loader.css"
class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="loader">
                <img src = "https://i.gifer.com/4V0b.gif" alt="loader"/>
            </div>
        )
    }
}

export default Loader;
