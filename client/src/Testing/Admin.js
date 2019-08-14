import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

const Admin = () => {
  const isSignedIn = useSelector(state => state.user.signedIn);
  const projects = useSelector(state => state.projects);
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

	/*
		STATES
		signed in is null - we haven't checked yet
		signed in is true - we are signed in
		signed in is false - we are signed out

		These should only be checked if we are signed in
		projects fetched is false - projects havent been fetched yet
		projects fetched is true - projects have been fetched
	*/

  //TODO: change to use fetched instead, so this isn't shown when we are signed out too
  if (isSignedIn === null)
    return <div style={{ margin: "10px" }}>Loading...</div>;

	//TODO: fetch project data if it hasn't been done yet. "useEffect"
	// If you are signed in and projects haven't been fetched yet
  if(isSignedIn && !projects.fetched)
    return <div style={{ margin: "10px" }}>Loading projects data...</div>;

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

  const signedInView = (
    <>
      <div>You are signed in as admin</div>
      {/* {projects.projects.map(project => {
        return <h3>roject.title</h3>
      })} */}
    </>
  );

  return (
    <div style={{ margin: "10px" }}>
      {!isSignedIn && notSignedInView}
      {isSignedIn && signedInView}
    </div>
  );
};

export default Admin;
