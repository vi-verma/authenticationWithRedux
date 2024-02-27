import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../store/reducer/authReducer";
import { FaRegUser } from "react-icons/fa";

const Navigation = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const stateData = useSelector(
    (state: any) => state?.authenticatedUserSliceReducer
  );
  console.log('stateData',stateData)

  useEffect(()=> {
    !stateData?.token && nevigate('/login')
  },[nevigate, stateData?.token])

  const doLogut = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex justify-center sticky top-0 text-white p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <ul className="w-1/2 flex pl-24 justify-between">
        {stateData?.token && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </>
        )}
        {!stateData?.token ? (
          <>
            <li>
              <Link to="login">Login </Link>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li className="cursor-pointer" onClick={doLogut}>
              Log Out
            </li>
          </>
        )}
      </ul>
      <div className="flex-auto w-24">
        <FaRegUser className="float-right w-" size={20} />
      </div>
    </nav>
  );
};

export default Navigation;
