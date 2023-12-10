import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebse/Config";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [place, setPlace] = useState([null]);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //password reset

  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // socal login
  const userSocalLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    fetch("place.json")
      .then((res) => res.json())
      .then((data) => setPlace(data))
      .catch((error) => console.log(error));
  }, []);

  const authentication = {
    userPasswordReset,
    userLogin,
    userSocalLogin,
    place,
    createUser,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
