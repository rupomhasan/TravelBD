import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const Navlinks = (
    <>
      <Link className="p-1 rounded hover:bg-base-200" to="/">
        Home
      </Link>
      <Link className="p-1 rounded hover:bg-base-200" to="#">
        Destinaion
      </Link>
      <Link className="p-1 rounded hover:bg-base-200" to="#">
        Blog
      </Link>
      <Link className="p-1 rounded hover:bg-base-200" to="#">
        Contact
      </Link>
    </>
  );

  return (
    <div className="max-w-5xl mx-auto navbar  font-Montserrat">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-2 z-[1] p-2 text-left space-y-2 shadow bg-base-100 rounded-box w-28">
            {Navlinks}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>

      <div className="navbar-end ">
        <div className=" lg:flex  hidden">
          <ul className=" text-white px-6  horizontal space-x-10 font-medium ">
            {Navlinks}
          </ul>
        </div>
        <Link to="/login" className="btn bg-btnColors hover:bg-btnColors">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
