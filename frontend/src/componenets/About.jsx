import React from "react";
import bgAbout from "../assets/unsu5ju8.png";

const About = () => {
  return (
    <div className="container-fluid border border-secondary">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-5 p-0">
            <img alt="golden-lines.png" className="w-100 img-fluid d-none d-lg-block" style={{"height": "600px", "objectFit": "cover"}} src={bgAbout} />
            {/*<img alt="golden-lines.png" className="w-100 img-fluid d-lg-none" style={{"transform": "rotate(-90deg)", width: "100%", objectFit: "fill", height: "400px"}} src={bgAbout} />*/}
          </div>
          <div className="col text-center d-flex flex-column justify-content-center me-lg-5 px-md-5 px-lg-0 my-4">
            <h3 className="my-4">
              About Us
            </h3>
            <p className="my-4 text-secondary">
              Welcome to <strong>iNotebook</strong> — a sleek and simple notes app built for people who think fast and need to keep up with their ideas. Whether you're jotting down a quick thought, planning your day, or organizing an entire project, iNotebook helps you stay in control with clarity.
            </p>
            <p className="my-4 text-secondary">
              Designed with a distraction-free interface, fast syncing, and smart tagging, our app is your go-to space for capturing everything that matters. Take notes anywhere, anytime — from your phone, tablet, or desktop — and always stay one step ahead. With iNotebook, your ideas are always at your fingertips — simple, secure, and ready whenever inspiration strikes.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About