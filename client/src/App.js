import React from 'react';
import axios from 'axios';

// * Include routing here

class App extends React.Component {
  handleOnClickAdd = () => {
    axios
      .post('http://localhost:3001/api/add-blogpost', {
        title: 'HOW TO CREATE POST REQUESTS WITH STYLE'
      })
      .then(result => {
        console.log(result.data);
        console.log(result.status);
      })
      .catch(e => {
        console.log(e);
      });
  };
  handleOnClickRemove = () => {
    axios
      .delete('http://localhost:3001/api/remove-blogpost', {
        // ! Have to wrap payload in a key called data when sending DELETE requests
        data: {
          id: '5d30bf5ddc7b0b50fb350b75'
        }
      })
      .then(result => {
        console.log(result.data);
        console.log(result.status);
      })
      .catch(e => {
        console.error(e.response.status + '\n' + e.response.data);
      });
  };

  render() {
    return (
      <>
        <button onClick={this.handleOnClickAdd}>Add</button>
        <button onClick={this.handleOnClickRemove}>Remove</button>
      </>
    );
  }
}

export default App;
