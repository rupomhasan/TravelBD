import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Other from "./Other";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin, userPasswordReset } = useContext(AuthContext);
  const emailvalue = useRef(null);

  const notify = (message) => toast(message);

  const handelsubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userLogin(email, password)
      .then((res) => {
        notify("Login successful");
        console.log(res);
      })

      .catch((error) => console.log(error));
  };

  const handelForget = () => {
    const email = emailvalue.current.value;
    userPasswordReset(email)
      .then(() => {
        notify("Check your email ");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-xl mx-auto   mt-10  font-MavenPro">
        <div className="text-left border px-14 py-9 ">
          <h2 className="text-2xl font-bold">Login</h2>
          <form onSubmit={handelsubmit} className="">
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              className="placeholder-black  border-b-2 my-12  pb-3 focus:outline-none text-black  font-medium   w-full"
              ref={emailvalue}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="placeholder-black border-b-2 py-1 focus:outline-none text-black  font-medium   w-full"
            />
            <div className="flex items-center justify-between mt-7">
              <label className="flex gap-1 items-center  ">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <p htmlFor="terms" className="font-medium select-none">
                  Remember Me
                </p>
              </label>
              <p
                onClick={handelForget}
                className="underline text-orange-400 font-medium"
              >
                Forgot Password
              </p>
            </div>
            <div>
              <button className="btn w-full  mt-10 mb-6 bg-[#F9A51A] hover:bg-[#F9A51A]">
                Login
              </button>
            </div>
          </form>
          <p className="text-center ">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-400 underline font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
        <Other></Other>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
