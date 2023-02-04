import Home from "./Home";
import About from "./AboutMe";
import Contact from './ContactMe';
import { Link, Routes, Route } from 'react-router-dom';

function Nav() {
    const navStyle = {
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "space-evenly",
    };
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}><h1>Home</h1></Link>
                <Link to="/About" style={linkStyle}><h1>About</h1></Link>
                <Link to="/Contact" style={linkStyle}><h1>Contact</h1></Link>
            </nav>
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Nav;