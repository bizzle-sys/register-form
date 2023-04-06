import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
        <label htmlFor="full name">Full Name:</label>
        <input value={name} type="text" placeholder="enter your name" />
        <label htmlFor="email"> Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="enter your password"
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already a Member? Login Here
      </button>
    </div>
  );
};
