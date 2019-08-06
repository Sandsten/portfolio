import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CreateAccount extends Component {
  createAccount = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    // Make a POST request to the server for creating an account
    axios.post('http://localhost:3001/create-account', {
      username,
      password
    });
  };

  authenticate = event => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    axios
      .post(
        'http://localhost:3001/sign-in',
        {
          username,
          password
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.dispatch({ type: 'LOGIN_SUCCESS' });
      });
  };

  testCookie = () => {
    axios.post(
      'http://localhost:3001/valid-token',
      {},
      {
        // This will allow sending cookies with CORS policy
        withCredentials: true
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createAccount}>
          <input name="username" type="text" placeholder="username" />
          <br />
          <input name="password" type="password" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.authenticate}>
          <input name="username" type="text" placeholder="username" />
          <br />
          <input name="password" type="password" placeholder="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
        <button onClick={this.testCookie}>Test Cookie</button>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(CreateAccount);
