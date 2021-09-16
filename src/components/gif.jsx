import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.selectFunction(this.props.id);
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      // click on the gif - onclick function
      // handle the click
      // selectedGif state is in the app
      //  need a selectedGif function in the app
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
