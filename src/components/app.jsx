// external
import React, { Component } from 'react';

// internal
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar></SearchBar>
          <div className="selected-gif">
            <Gif Id='xT9IgDEI1iZyb2wqo8'></Gif>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;
