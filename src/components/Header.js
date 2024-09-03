import {React} from "react";
import Logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  // const [isSignOut, setIsSignOut] = useState(true);
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // setIsSignOut(false);
        navigate("/");
       
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="img" />
      {user&&<div className="flex p-4">
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="img"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
