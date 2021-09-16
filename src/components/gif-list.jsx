import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  // function to render the list using javascript
  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectFunction={this.props.selectFunction} />
    })
  }
  render() {
    return (
      <div className="gif-list">
        {/* calling the above renderList function */}
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
