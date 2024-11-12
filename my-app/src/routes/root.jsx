import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import './router.jsx'
import './root.css'

function root() {
    return (
        <>
        <div className="sidebar-option">
            <div className="sidebar-row"></div>
            <section className="mainContent" aria-hidden></section>
            <NavLink to="/CirrusPage" className="CirrusInfo"></NavLink>
            <NavLink to="/" className="Startsida"> </NavLink>
            <NavLink to="/Web360" className="Web360Info"></NavLink>
            <NavLink to="/AnnaLeringPage" className="AnnaLeringInfo"></NavLink>
            <Outlet />
        </div>
        
        </>
    )
}

export default root;