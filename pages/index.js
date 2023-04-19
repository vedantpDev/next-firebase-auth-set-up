import React from "react";
import { getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { withAuthUser, AuthAction } from "next-firebase-auth";

const Home = () => {
  let auth = getAuth(getApp());
  let email = "piddsdsdfdt@gmail.com";
  let pssword = "1002654685453";

  const handle = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pssword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      next-firebase-auth
      <button onClick={handle}>Click</button>
    </>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Home);
