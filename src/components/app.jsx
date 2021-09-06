// external
import React, { Component } from 'react';

// internal
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component {
  render() {
    const gifs = [
      { id: 'BBkKEBJkmFbTG'} ,
      { id: 'xT9IgDEI1iZyb2wqo8' }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar></SearchBar>
          <div className="selected-gif">
            <Gif Id='xT9IgDEI1iZyb2wqo8' />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
