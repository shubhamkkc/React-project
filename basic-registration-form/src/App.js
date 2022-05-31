import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "" });
  const [sucess, setSucess] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(form);
    if(form.fname&& form.lname && form.email)
   setSucess(false)
  }

  function handleClick(event) {
   if(form.fname&& form.lname && form.email)
   setSucess(true)
   else
   setSucess(false)
    event.preventDefault();
  }

  return (
    <div className="App">
    
      <form className="container" onSubmit={handleClick}>
        <div className="container-item">
          {sucess ? <span className="sucess"> Sucess! thank you for registering.</span> : ""}
          <input
            onChange={handleChange}
            name="fname"
            placeholder="first name"
          ></input>
          {(!sucess && !form.fname) ? <span className="fail">please enter first name.</span> : ""}
          <input
            onChange={handleChange}
            name="lname"
            placeholder="last name"
          ></input>
          {(!sucess && !form.lname) ? <span className="fail">please enter last name.</span> : ""}
          <input
            onChange={handleChange}
            name="email"
            placeholder="email"
          ></input>
          {(!sucess && !form.email) ? <span className="fail">please enter email.</span> : ""}
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
