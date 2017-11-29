import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: '',
  };

  render() {
    return (
      <div>
      <input onChange={event => this.setState({ term: event.target.value })} />
      Value of the Input: {this.state.term}
      </div>

  );
  }
}


export default SearchBar;
