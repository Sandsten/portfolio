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

  handleOnClickUpdate = event => {
    event.preventDefault();
    var newTitle = event.target.firstChild.value;

    axios
      .put('http://localhost:3001/api/update-blogpost', {
        id: '5d30bae45315194069af76b4',
        newTitle
      })
      .then(result => {
        console.log(result.data);
        console.log(result.status);
      })
      .catch(e => {
        console.error(e.response.status + '\n' + e.response.data);
      });

    event.target.firstChild.value = '';
  };

  render() {
    return (
      <>
        <button onClick={this.handleOnClickAdd}>Add</button>
        <button onClick={this.handleOnClickRemove}>Remove</button>
        <form onSubmit={this.handleOnClickUpdate}>
          <input name="newTitle" type="text" placeholder="New Title" />
          <input type="submit" value="Submit" />{' '}
        </form>
      </>
    );
  }
}

export default App;
