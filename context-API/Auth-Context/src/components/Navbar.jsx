import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
      const {  isAuth } = useContext(AuthContext);

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "20px",
        width: "60%",
        margin: "auto",
      }}
    >
      <button>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Navbar