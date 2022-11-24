import React from "react";
import {GiCat} from "react-icons";

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <GiCat /> Amber Data
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>        </nav>
    );
};

export default Navbar;