import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import bgImage from "../Assets/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL:
              "https://img.freepik.com/premium-vector/digital-painting-girl-anime-style-vector-illustration_147933-3842.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browser");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + "-" + errorCode);
        });
    } else {
      //  sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + "-" + errorCode);
        });
      navigate("/browser");
    }
    // console.log(userName.current.value)
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />

      <div className="absolute">
        <img src={bgImage} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 px-12 py-14 gap-8 bg-black bg-opacity-80 left-0 right-0 mx-auto my-40 flex flex-col text-white rounded-lg"
      >
        <h1 className=" text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Name"
            className="p-3 bg-gray-900 border border-gray-300 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 bg-gray-900 border border-gray-300 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3  bg-gray-900  border border-gray-300 rounded-md"
        />
        {errorMsg && <p className="font-bold text-red-800">{errorMsg}</p>}
        <button
          onClick={() => handleButtonClick()}
          type="submit"
          className="p-2 rounded-md bg-red-700 "
        >
          {isSignInForm ? "Sign In" : "Sign UP"}
        </button>
        <p onClick={() => toggleSignInForm()} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already a member? Sign In "}
        </p>
      </form>
    </>
  );
};

export default Login;
