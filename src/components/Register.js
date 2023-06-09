import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-config";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
        <label htmlFor="full name">Full Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="enter your name"
        />
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
