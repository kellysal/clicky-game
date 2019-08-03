import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="https://github.com/kellysal/clicky-game">Clicky Game</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div id="description">{props.children}</div>
                    </li>
                </ul>
                <span className="navbar-text">
                    Score: {props.score}
                    <br></br>
                    Highscore: {props.topscore}
                </span>
            </nav>
            <header>
                <h1>SF Scenery Memory Game</h1>
                <h4>Click on an image to earn points, but don't click on any image more than once!</h4>
            </header>
        </div>
    );
}
export default Navbar;