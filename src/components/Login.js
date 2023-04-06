import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
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
        <button type="submit">Login</button>
        <button>New Member? Register Here</button>
      </form>
    </div>
  );
};
