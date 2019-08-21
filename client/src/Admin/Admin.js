import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import ItemDragList from './ItemDragList';

import { fetchProjects, updateProjectOrder } from '../redux/actions/projectsActions';
import { signIn, testCookie, signOut } from '../redux/actions/userActions';

const DraggableList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 50vh;
`;

const Admin = () => {
  const isSignedIn = useSelector(state => state.user.signedIn);
  const projects = useSelector(state => state.projects);
  const updatingProjects = useSelector(state => state.projects.updating);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects.fetched) {
      dispatch(fetchProjects());
    }
  }, []);

  const createAccount = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    dispatch(createAccount(username, password));
  };

  const handleSignIn = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    dispatch(signIn(username, password));
  };

  const handleNewProjectOrder = newProjectsOrder => {
    dispatch(updateProjectOrder(newProjectsOrder));
  };

  if (isSignedIn === null) return <div style={{ margin: '10px' }}>Loading...</div>;
  // If you are signed in and projects haven't been fetched yet
  if (!projects) return <div style={{ margin: '10px' }}>Loading projects data...</div>;

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
      <form onSubmit={handleSignIn}>
        <input name="username" type="text" placeholder="username" />
        <br />
        <input name="password" type="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <button onClick={dispatch(testCookie())}>Test Cookie</button>
    </>
  );

  const signedInView = (
    <DraggableList>
      <button style={{ marginBottom: '30px' }} onClick={() => dispatch(signOut())}>
        SignOut
      </button>
      <ItemDragList
        items={projects.data}
        onNewItemOrder={handleNewProjectOrder}
        disabled={updatingProjects}
      />
    </DraggableList>
  );

  return (
    <div style={{ margin: '10px' }}>
      {!isSignedIn && notSignedInView}
      {isSignedIn && signedInView}
    </div>
  );
};

export default Admin;
