import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Form = () => {
  const [form, setForm] = useState({});

  const { toggleAuth } = useContext(AuthContext);

  const handlechange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const postForm = () => {
    axios
      .post("https://reqres.in/api/login", form)
      .then(function (response) {
        toggleAuth(response.data.token);

        console.log(response.data.token);
      })
      .catch(function (error) {
        alert("user not found");
        console.log(error);
      });
  };

  return (
    <div>
      <input type="email" name="email" placeholder="enter your email" onChange={(e) => handlechange(e)} />
      <input type="password" name="password" placeholder="enter your password" onChange={(e) => handlechange(e)} />
      <button onClick={postForm}>Submit</button>
    </div>
  );
};

export default Form;
