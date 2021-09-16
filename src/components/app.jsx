// external
import React, { Component } from "react";
import giphy from "giphy-api";

// internal
import SearchBar from "./search-bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif-list.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null,
    };

    // default search if nothing is keyed in the search bar
    this.search("disney");
  }

  search = (query) => {
    giphy("yVMhiJNdLcjD9SgRy25fBavJYPf9SrGT").search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        });
      }
    );
  };

  select = (id) => {
    this.setState({
      selectedGifId: id,
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}></SearchBar>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFunction={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
