import React, { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthDetails = () => {
  const [authuser, setauthUser] = useState(null);
  useEffect(() => {
    const eventListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user);
      } else {
        setauthUser(null);
      }
    });
  }, []);
  return (
    <div>
      {authuser ? <p>{`Signed In as ${authuser.email}`}</p> : <p>Signed Out</p>}
    </div>
  );
};
