// external
import React, { Component } from 'react';

// internal
import SearchBar from './search-bar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar></SearchBar>
        </div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;
