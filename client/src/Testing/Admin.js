import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { fetchProjects } from "../redux/actions/projectsActions";

const DraggableList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  width: 50vh;
`;

const DraggableProject = styled.div`
  padding: 10px;
  border: 1px black solid;
  border-radius: 2px;

  :hover {
    cursor: move;
  }
`;

const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

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

const Admin = () => {
  const isSignedIn = useSelector(state => state.user.signedIn);
  const projects = useSelector(state => state.projects);
  const [dragList, setDragList] = useState(null);
  const [draggedProject, setDraggedProject] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects.fetched) {
      dispatch(fetchProjects());
    }
  }, []);

  useEffect(() => {
    // When the projects are fetched from redux state, store them in local state which we will manipulate
    if (projects.fetched && dragList === null) {
      setDragList(projects.projects);
    }
    // console.log(dragList);
  });

  const dragStartHandler = ev => {
    // Store the dragged item in state
    var draggedItemIndex = ev.target.id;
    setDraggedProject(dragList[draggedItemIndex]);

    // Store the project name in the dragged item
    // This is used to filter out the project from its previous position
    ev.dataTransfer.setData("project/title", ev.target.innerText);

    console.log("Dragging has started!");
  };

  const dragOverHandler = ev => {
    var dragItemTitle = ev.dataTransfer.getData("project/title");
    var dragOverIndex = ev.target.id; // Index of project we are hovering over

    // Copy of array, don't manipulate state variable directly
    var newList = [...dragList];

    // Delete dragged project from the list, so it only appear once
    newList = newList.filter(project => project.title !== dragItemTitle);

    // Insert dragged project at the position we are hovering over
    newList.splice(dragOverIndex, 0, draggedProject);

    setDragList(newList);
  };

  //TODO: change to use fetched instead, so this isn't shown when we are signed out too
  if (isSignedIn === null)
    return <div style={{ margin: "10px" }}>Loading...</div>;

  //TODO: fetch project data if it hasn't been done yet. "useEffect"
  // If you are signed in and projects haven't been fetched yet
  if (isSignedIn && !dragList)
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
    <DraggableList>
      {dragList.map((project, i) => {
        if (!project)
          return <DraggableProject key={i}>UNDEFINED </DraggableProject>;
        return (
          <DraggableProject
            id={i} // use this as index
            key={project._id}
            draggable
            onDragStart={dragStartHandler}
            onDragOver={dragOverHandler}
          >
            {project.title}
          </DraggableProject>
        );
      })}
    </DraggableList>
  );

  return (
    <div style={{ margin: "10px" }}>
      {!isSignedIn && notSignedInView}
      {isSignedIn && signedInView}
    </div>
  );
};

export default Admin;

/*
		STATES
		signed in is null - we haven't checked yet
		signed in is true - we are signed in
		signed in is false - we are signed out

		These should only be checked if we are signed in
		projects fetched is false - projects havent been fetched yet
		projects fetched is true - projects have been fetched
	*/
