// external
import React, { Component } from 'react';
import giphy from 'giphy-api';

// internal
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    }

    this.search('homer thinking');

  }

  search = (query) => {
    giphy('yVMhiJNdLcjD9SgRy25fBavJYPf9SrGT').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

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
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
