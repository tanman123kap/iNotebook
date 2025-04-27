import React from "react";
import logo from "../assets/in..png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");
            if(token) {
                localStorage.removeItem("token");
                window.location.reload();
            } else {
                toast.error("Login Required!");
            }
        } catch(error) {
            toast.error(error);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg mx-lg-5 mx-md-3" style={{"boxShadow": "none"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="80" height="60" />
                    &nbsp;iNotebook
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button onClick={handleLogout} className="nav-link">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar