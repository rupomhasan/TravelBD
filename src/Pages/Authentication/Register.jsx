import { Link } from "react-router-dom";
import Other from "./Other";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Components/Firebse/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const notify = () => toast("Successful");
  const handelsubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");

    const email = form.get("email");

    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    console.log(firstName, lastName, email, password, confirmPassword);
    setError("");

    if (password !== confirmPassword) {
      setError("Password do not match ");
      return;
    } else if (password.length < 7) {
      setError("Password length must be at least 8 charachters");
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then((res) => {
        e.target.reset();
        updateProfile(auth.currentUser, {
          displayName: firstName + "  " + lastName ? lastName : "",
        })
          .then(() => console.log("profile updated"))
          .catch((error) => console.log(error));
        console.log(res);
        notify();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        e.target.reset();
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-xl mx-auto   mt-10  font-MavenPro">
        <div className="text-left border px-14 py-9 ">
          <h2 className="text-2xl font-bold">Create your account</h2>
          <form onSubmit={handelsubmit} className="">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="placeholder-black  border-b-2 my-12  pb-3 focus:outline-none text-black  font-medium   w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="placeholder-black  border-b-2   pb-3 focus:outline-none text-black  font-medium   w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              className="placeholder-black  border-b-2 my-12  pb-3 focus:outline-none text-black  font-medium   w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="placeholder-black border-b-2 py-1 focus:outline-none text-black  font-medium   w-full"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="placeholder-black border-b-2 py-1 mt-12 focus:outline-none text-black  font-medium   w-full"
              required
            />
            {error && (
              <p className="text-red-500 font-medium mt-3 text-lg">{error}</p>
            )}
            <div className="my-6">
              <button className="btn w-full  bg-[#F9A51A] hover:bg-[#F9A51A]">
                Create an account
              </button>
            </div>
          </form>
          <p className="text-center ">
            Already have an account?
            <Link to="/login" className="text-orange-400 underline font-medium">
              Please Login
            </Link>
          </p>
        </div>
        <Other></Other>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
