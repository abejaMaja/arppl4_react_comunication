import React from 'react';
import classes from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className={classes.Bar}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light btn-small">Home</a></li>
                        <li><a className="waves-effect waves-light btn-small">Lista</a></li>
                        <li><a className="waves-effect waves-light btn-small">Formularz</a></li>
                    </ul>
                    <div className={classes.TextPrawa}>
                        <p>ARPPL4</p>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;