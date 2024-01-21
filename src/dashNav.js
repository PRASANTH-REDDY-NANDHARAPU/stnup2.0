import { auth } from "./firebase";
import { signOut } from "firebase/auth"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";


const DashNav=()=>{
  const navigate = useNavigate();

    function addSignOut() {
        signOut(auth)
          .then(() => {
            navigate('/signin')
          })
          .catch((error) => {});
      }
      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            navigate("/browse")
            // ...
          } else {
            // User is signed out
            // ...
            navigate("/")

          }
        });
      },[])
    return(<nav className="navbar">
    <h1 className="nav-name">
      <span className="s">S</span>
      <span className="u">T</span>
      <span className="u">N</span>
      <span className="u">U</span>
      <span className="u">P</span>
    </h1>
    <ul className="nav-items">
      <button onClick={addSignOut} className="sign-in">
        Sign out
      </button>
    </ul>
  </nav>)
}

export default DashNav;