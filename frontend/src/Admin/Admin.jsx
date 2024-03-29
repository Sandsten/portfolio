import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import ItemDragList from './ItemDragList';

// import { fetchProjects, updateProjectOrder } from '../redux/actions/projectsActions';
// import { signIn, testCookie, signOut, createAccount } from '../redux/actions/userActions';

import { signIn, signOut, createAdminAccount } from '../Redux/slices/adminSlice'

const StyledAdmin = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 'projectOrder other';
`;

const StyledItemDragList = styled(ItemDragList)`
  grid-area: projectOrder;
`;

const StyledOtherSettings = styled.div`
  justify-self: right;
`;

const Admin = () => {
  const isSignedIn = useSelector(state => state.admin.signedIn);
  // const projects = useSelector(state => state.projects);
  // const updatingProjects = useSelector(state => state.projects.updating);
  // const isSignedIn = false
  const projects = null
  const updatingProjects = null

  const dispatch = useDispatch();

  useEffect(() => {
    // if (!projects.fetched) {
    //   //dispatch(fetchProjects());
    // }
  }, []);

  const handleCreateAccount = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    dispatch(createAdminAccount({username, password}));
  };

  const handleSignIn = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    dispatch(signIn({ username, password }));
  };

  const handleNewProjectOrder = newProjectsOrder => {
    //dispatch(updateProjectOrder(newProjectsOrder));
  };

  if (isSignedIn === "loading") return <div style={{ margin: '10px' }}>Loading...</div>;
  // If you are signed in and projects haven't been fetched yet
  // if (!projects) return <div style={{ margin: '10px' }}>Loading projects data...</div>;

  const signedInView = (
    <StyledAdmin>
      {projects && <StyledItemDragList
        items={projects.data}
        onNewItemOrder={handleNewProjectOrder}
        disabled={updatingProjects}
      />}
      <StyledOtherSettings>
        <button style={{ marginBottom: '30px' }}  onClick={() => dispatch(signOut()) }>
          {/* <button style={{ marginBottom: '30px' }} onClick={() => dispatch(signOut()) }> */}
          SignOut
        </button>
      </StyledOtherSettings>
    </StyledAdmin>
  );

  const notSignedInView = (
    <>
      <label>Create admin account</label>
      <form onSubmit={handleCreateAccount}>
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
      <button></button>
      {/* <button onClick={() => //dispatch(testCookie())}>Test Cookie</button> */}
    </>
  );

  return (
    <div style={{ margin: '10px' }}>
      {!isSignedIn && notSignedInView}  {/*If isSignedIn is null or false*/}
      {isSignedIn && signedInView}      {/*If isSignedIn is true*/}
    </div>
  );
};

export default Admin;
