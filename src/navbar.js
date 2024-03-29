import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    const [Class,setClass]=useState('mb-nav-none')
    const [into, setInto] = useState(<i className="bi bi-list"></i>);
function handleCross() {
  setInto((prevIcon) =>
    prevIcon.props.className === "bi bi-list" ? (
      <i className="bi bi-x-lg"></i>
    ) : (
      <i className="bi bi-list"></i>
    )
  );

  setClass((prevClass) =>
      prevClass === 'mb-nav' ? 'mb-nav-none' : 'mb-nav'
  );
}
function DontShow(){
    setClass((prevClass) =>
    prevClass === 'mb-nav' ? 'mb-nav-none' : 'mb-nav'
)

setInto((prevIcon) =>
prevIcon.props.className === "bi bi-list" ? (
  <i className="bi bi-x-lg"></i>
) : (
  <i className="bi bi-list"></i>
)
)

}
    return <><nav className="navbar">
        <h1 className="nav-name"><span className="s">S</span><span className="u">T</span><span className="u">N</span><span className="u">U</span><span className="u">P</span></h1>
        <ul className="nav-items">
            <Link  className="link-items" to='/'><li>Home</li></Link>
            <Link  className="link-items" to='/courses'><li>Courses</li></Link>
            <Link  className="link-items" to='/roadmap'><li>Road Map</li></Link>
            <Link  className="link-items" to='feedbacks'><li>Feedbacks</li></Link>
            <Link  className="link-items" to='/contact'><li>Contact</li></Link>
            <Link to='/signin'><button className="sign-in">Sign In</button></Link>
            <button  onClick={handleCross}className="hamburger">{into}</button>
        </ul>
    </nav>
    <div className="mb-nav-parent">
    <div className={Class}>
      <Link onClick={DontShow} to="/" className="mb-top-items"><h4><i class="bi bi-house-fill"></i> Home</h4></Link>
      <Link onClick={DontShow} to="/courses" className="mb-top-items"><h4><i class="bi bi-person-plus-fill"></i> Courses</h4></Link>
      <Link onClick={DontShow} to="/roadmap" className="mb-top-items"><h4><i class="bi bi-person-walking"></i> RoadMap</h4></Link>
      <Link onClick={DontShow} to="/feedbacks" className="mb-top-items"><h4><i class="bi bi-plus-circle-fill"></i> Feedbacks</h4></Link>
      <Link onClick={DontShow} to="/contact" className="mb-top-items"><h4> <i class="bi bi-telephone-outbound-fill"></i> Contact</h4></Link>
    </div>
    </div>
    </>
}
export default Navbar;
