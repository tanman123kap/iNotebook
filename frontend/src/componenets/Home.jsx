import React from "react";
import Notes from "../pages/Notes.jsx";
import HomeNav from "../pages/HomeNav.jsx";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="mx-2 mt-3">
                <div className="mx-2">
                    <h3 className="text-center">- Recent Notes -</h3>
                    <Notes />
                </div>
            </div>
            <div className="mx-2 mt-5">
                <div className="mx-2">
                    <h3 className="text-center">- Your Navigation Area -</h3>
                    <HomeNav />
                </div>
            </div>
        </div>
    )
}

export default Home