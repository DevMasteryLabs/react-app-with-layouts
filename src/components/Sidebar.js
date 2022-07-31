import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Sidebar() {
    const history = useHistory()
    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        history.replace('/login')
    }
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    <NavLink to="/dashboard">
                        <i className="fa fa-home"></i>
                        <span className="nav-text">Home</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="fa fa-user"></i>
                        <span className="nav-text">Profile</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="logout">
                <li>
                    <a href="#" onClick={handleLogoutClick}>
                        <i className="fa fa-power-off"></i>
                        <span className="nav-text">Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar