import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const manuItems = (
    <React.Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About </NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {/* jodi login thake ba na thake  */}
      {user?.uid ? (
        <li>
          <button onClick={handleLogOut}>LogOut </button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login </NavLink>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar flex justify-between mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItems}
          </ul>
        </div>
        <NavLink className="btn btn-ghost normal-case text-2xl font-bold">
          Healthy Smile
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1  ">{manuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
