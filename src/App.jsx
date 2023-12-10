import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Layout/Home/Home";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Home></Home>
    </>
  );
}

export default App;
