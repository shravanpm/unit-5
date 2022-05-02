import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth,setUSER } from "../Redux/actions";
import { store } from "../Redux/store";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [loginData,setloginData] = useState({
    username : "",
    pass : "",
  }) 
  const handleChange = (event) =>{
    const {name,value} = event.target;
    setloginData({
      ...loginData,
      [name] : value
    });
   
   
    
  }
  async function getData(loginData){
    console.log("dddd",loginData)
    let data =await fetch(`http://localhost:8080/users?q=${loginData.username}`).then((d)=>d.json());
   console.log(data)
   setloginData(data)
  }
  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log(loginData)
    let data = getData(loginData);
    console.log("data",data)
    // console.log(event.target.username.value)
    if(data){
      setAuth(true);
      setUSER(data);
      
      navigate("/",{replace:true})
    }else{
      
    }
    
  }
 
  return (
    <div>
      
      <input
        className="username"
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        onChange={handleChange}
        name="pass"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
