import React from 'react';
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (<nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>

            </li>
            <li>
                <NavLink to='/about'>About</NavLink>

            </li>
            <li>
                <NavLink to='/imagePresenter'>Image Presenter</NavLink>

            </li>
        </ul>
    </nav>)
}