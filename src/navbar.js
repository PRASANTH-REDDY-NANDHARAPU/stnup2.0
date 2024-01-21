import { Link } from "react-router-dom";
const Navbar=()=>{
    return <nav className="navbar">
        <h1 className="nav-name"><span className="s">S</span><span className="u">T</span><span className="u">N</span><span className="u">U</span><span className="u">P</span></h1>
        <ul className="nav-items">
            <Link className="link-items" to='/'><li>Home</li></Link>
            <Link className="link-items" to='/courses'><li>Courses</li></Link>
            <Link className="link-items" to='/roadmap'><li>Road Map</li></Link>
            <Link className="link-items" to='feedbacks'><li>Feedbacks</li></Link>
            <Link className="link-items" to='/contact'><li>Contact</li></Link>
            <Link to='/signin'><button className="sign-in">Sign In</button></Link>
            <button className="hamburger"><i class="bi bi-list"></i></button>
        </ul>
    </nav>
}
export default Navbar;
