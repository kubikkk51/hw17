import './styles.css';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavComponent() {
    return (
        <nav className="nav-component">
            <NavLink to='/main' className="nav-link">Main</NavLink>
            <NavLink to='/feed' className="nav-link">Feed</NavLink>
            <NavLink to='/photos' className="nav-link">Photo</NavLink>
            <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
        </nav>
    )
}