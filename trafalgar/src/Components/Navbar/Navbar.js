import React from "react";
import logo from "../../img/logo.png";
import ColumnDots from "../ColumnDots/ColumnDots";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-list">
                    <ul>
                        <li className="home">home</li>
                        <li>find a doctor</li>
                        <li>apps</li>
                        <li>testimonials</li>
                        <li>about us</li>
                    </ul>
                </div>
            </nav>

            {/* dots */}
            <div>
                <ColumnDots />
            </div>
        </>
    )
}

export default Navbar;