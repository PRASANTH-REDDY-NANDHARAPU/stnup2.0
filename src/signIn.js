import dog from "./images/signup.png";
import { useState} from "react";
import { useRef } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase";
// import { Navigate, useNavigate } from "react-router-dom";
const Authentication = () => {
  // const navigate=useNavigate()
  const [isSignIn, setIsSignIn] = useState(true);
  const [ErrorMsg, setErrorMsg] = useState();
  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  const password = useRef();
  function clickButton() {
    if (name.current && name.current.value === "") {
      setErrorMsg("Please fill name field!!");
    } else if (
      email.current &&
      (!email.current.value.includes("@gmail.com") ||
        email.current.value === "")
    ) {
      setErrorMsg("Please include @gmail.com!!");
    } else if (
      mobile.current &&
      (mobile.current.value === "" || mobile.current.value.length !== 10)
    ) {
      setErrorMsg("Please fill mobile number!!");
    } else if (password.current && password.current.value === "") {
      setErrorMsg("Please provide password!!");
    } else {
      const green = <span className="green">success</span>;
      setErrorMsg(green);
      if (!isSignIn) {
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value,name.current.value,mobile.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            //  navigate('/signin')


          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage)
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    // navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage)
  });

      }
    }
  }

  function toggleAuth() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="sign-bg">
      <div className="sign-inner-bg">
        <img className="dog" src={dog}></img>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{isSignIn ? "SIGN IN HERE" : "SIGN UP HERE"}</h2>
          {!isSignIn && (
            <>
              <p>Enter your Name</p>
              <input type="text" ref={name}></input>
            </>
          )}
          <p>Enter your email</p>
          <input type="text" ref={email}></input>
          {!isSignIn && (
            <>
              <p>Enter your mobile number</p>
              <input type="text" ref={mobile}></input>
            </>
          )}
          <p>choose your password</p>
          <input type="text" ref={password}></input>
          <p className="error">{ErrorMsg}</p>
          <button onClick={clickButton}>
            {isSignIn ? "Sign Me In" : "Sign Me Up"}
          </button>
          <p className="manage-auth" onClick={toggleAuth}>
            {isSignIn
              ? "New To STNUP? Sign Up Now!!"
              : "Are You a  Member Inside STNUP? Sign In Now!!"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Authentication;
