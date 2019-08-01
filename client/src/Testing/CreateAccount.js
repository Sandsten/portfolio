import React, { Component } from 'react';
import axios from 'axios';

class CreateAccount extends Component {
  createAccount = event => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    // Make a POST request to the server for creating an account
    axios.post('http://localhost:3001/create-account', {
      email,
      password
    });
  };

  authenticate = event => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    axios.post(
      'http://localhost:3001/sign-in',
      {
        email,
        password
      },
      { withCredentials: true }
    );
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
          <input name="email" type="text" placeholder="email" />
          <br />
          <input name="password" type="text" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.authenticate}>
          <input name="email" type="text" placeholder="email" />
          <br />
          <input name="password" type="text" placeholder="password" />
          <br />
          <input type="submit" value="Auth" />
        </form>
        <button onClick={this.testCookie}>Test Cookie</button>
      </div>
    );
  }
}

export default CreateAccount;
