import React from 'react';
import "./sideBar.css"
import SideBarButtons from '../sideBarButtons/sideBarButtons';
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="sidebar">
                <SideBarButtons text="All Genre" />
                <SideBarButtons text="Action" />
            </div>
        )
    }
}

export default SideBar;
