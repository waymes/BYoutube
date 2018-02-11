import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearchChange(this.state.term);
    }
  }

  render() {
    const { term } = this.state;
    return (
      <div className='search-bar col-12 d-flex justify-content-center'>
        <input
          autoFocus
          type="text"
          value={term}
          placeholder='Search'
          onChange={event => this.setState({ term: event.target.value })}
          onKeyPress={(e) => this._handleKeyPress(e)}
        />
      </div>
    );
  }
};

export default SearchBar;