import './styles.css';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavComponent() {
    return (
        <nav className="nav-component">
            <NavLink to='/hw17/main' className="nav-link">Main</NavLink>
            <NavLink to='/hw17/feed' className="nav-link">Feed</NavLink>
            <NavLink to='/hw17/photos' className="nav-link">Photo</NavLink>
            <NavLink to='/hw17/contacts' className="nav-link">Contacts</NavLink>
        </nav>
    )
}