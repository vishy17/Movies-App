import { Component } from "react";
import { Switch, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import MoviesList from "./containers/moviesList/moviesList";

class Navigator extends Component {
    render() {
        return(
            <Switch >
                <Route path="/"  exact component={MoviesList}></Route>
            <Route path="/movies" exact component={MoviesList}></Route>
            <Route path="/header" exact component={NavBar}></Route>
            <Route path="/sidebar" exact component={SideBar}></Route>
            </Switch>
        );
    }
}

export default Navigator;