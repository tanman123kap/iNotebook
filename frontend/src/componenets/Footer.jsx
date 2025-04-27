import React from "react";
import logo from "../assets/in..png";

const Footer = () => {
    return (
        <div className="container-fluid mt-5">
            <footer>
                <section className="mx-2">
                    <div className="container-fluid mt-5">
                        <div className="row mt-3 text-md-start text-center">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold"><img src={logo} alt="Logo" className="w-25 h-25" />&nbsp;iNotebook</h6>
                                <p>
                                    Your personal space for putting your thoughts to the front, organising them according to needs and classifying them into your own customised areas.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Services</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{"width": "60px", "backgroundColor": "#FFD700", "height": "2px"}}
                                />
                                <p className="text-dark">
                                    Notes Access
                                </p>
                                <p className="text-dark">
                                    Updation
                                </p>
                                <p className="text-dark">
                                    User Assistance
                                </p>
                                <p className="text-dark">
                                    Secure Browsing
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{"width": "60px", "backgroundColor": "#FFD700", "height": "2px"}}
                                />
                                <p>New York, NY 10012, US</p>
                                <p>inotebook@gmail.com</p>
                                <p>Phone: + 01 234 567 88</p>
                                <p>Phone: + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-3 text-secondary"
                >
                    © 2025 Copyright:&nbsp;
                    <a className="text-decoration-none text-secondary text-uppercase" href="https://apexsoftech.com/">apexsoftech.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer