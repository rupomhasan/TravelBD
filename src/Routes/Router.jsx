import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const MyCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default MyCreatedRouter;
