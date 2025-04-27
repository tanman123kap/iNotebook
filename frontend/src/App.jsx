import About from "./componenets/About.jsx";
import Footer from "./componenets/Footer.jsx";
import GetNotes from "./componenets/GetNotes.jsx";
import Home from "./componenets/Home.jsx";
import Navbar from "./componenets/Navbar.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Add from "./pages/Add.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useContext } from "react";
import { NoteContext } from "./context/NoteContext.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  const {token} = useContext(NoteContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      {token ? <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/notes" element={<GetNotes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      </> : (<>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </>)}
    </BrowserRouter>
  )
}

export default App