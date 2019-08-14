import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

const Admin = () => {
  const isSignedIn = useSelector(state => state.user.signedIn);
  const dispatch = useDispatch();

  const createAccount = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    // Make a POST request to the server for creating an account
    axios.post(`${URL}/create-account`, {
      username,
      password
    });
  };

  const authenticate = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    axios
      .post(
        `${URL}/sign-in`,
        {
          username,
          password
        },
        { withCredentials: true }
      )
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      });
  };

  const testCookie = () => {
    axios.post(
      `${URL}/valid-token`,
      {},
      {
        // This will allow sending cookies with CORS policy
        withCredentials: true
      }
    );
  };

  const notSignedInView = (
    <>
      <label>Create admin account</label>
      <form onSubmit={createAccount}>
        <input name="username" type="text" placeholder="username" />
        <br />
        <input name="password" type="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <label>Sign in</label>
      <form onSubmit={authenticate}>
        <input name="username" type="text" placeholder="username" />
        <br />
        <input name="password" type="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <button onClick={testCookie}>Test Cookie</button>
    </>
  );

  const signedInView = <div>You are signed in as admin</div>;

  //TODO: change to use fetched instead, so this isn't shown when we are signed out too
  if(isSignedIn === null) return <div style={{margin: "10px"}}>Loading...</div>

  return (
    <div style={{ margin: "10px" }}>
      {!isSignedIn && notSignedInView}
      {isSignedIn && signedInView}
    </div>
  );
};

export default Admin;
