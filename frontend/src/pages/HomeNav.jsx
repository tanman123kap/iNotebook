import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
    return (
        <div className="row mx-2">
            <div className="col-sm-6 mb-2 mb-sm-0">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Add New Notes</h5>
                        <p className="card-text">Unravel your thoughts and put it in words. Go to Add Notes Page.</p>
                        <Link to="/add" className="btn btn-primary">Add &rarr;</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">See All Entries</h5>
                        <p className="card-text">All your lifelong work in one place. Go to All Notes Page.</p>
                        <Link to="/notes" className="btn btn-primary">Get Notes &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNav