import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import 'mdb-ui-kit/css/mdb.min.css';
import * as mdb from 'mdb-ui-kit'; // lib
import axios from "axios";
import { NoteContext } from "../context/NoteContext";
import { toast } from "react-toastify";

const Signup = () => {
    const {backendUrl} = useContext(NoteContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const noteData = {
        name: name,
        email: email,
        password: password
    }
    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + "/api/user/signup", noteData);
            if(response.data.success) {
                localStorage.setItem("token", response.data.token);
                window.location.reload();
            } else {
                toast.error(Array.isArray(response.data.errors) ? response.data.errors[0].msg : response.data.errors);
            }
        } catch (error) {
            toast.error(error);
        }
    }
    useEffect(() => {
       // Initialize inputs if dynamically added after page load
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
        new mdb.Input(formOutline);
      });
    }, []);
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <section className="w-100">
                <div className="container h-100 py-4">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black rounded-4">
                                <div className="card-body p-md-4">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <h2 className="text-center fw-bold mb-4 mt-4">Sign up</h2>
                                            <form onSubmit={handleSignup} className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <FaUser className="me-3" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="form3Example1c" className="form-control" required />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <FaEnvelope className="me-3" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="form3Example3c" className="form-control" required />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <FaLock className="me-3" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="form3Example4c" className="form-control" required />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end mb-3 mb-lg-4">
                                                    <p>Have an Account?&nbsp;<Link to="/login" className="text-primary cursor-pointer">Login</Link></p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup