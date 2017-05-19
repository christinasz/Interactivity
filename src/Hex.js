import React, { Component } from 'react';
import './Hex.min.css';

// Returns a random hex code, corresponding to a colour
function randomHex() {
    var hex = "#";
     // only including part of possible hex codes, so that it's all pretty pastels
    var alphabet = "9ABCDEF";
    for (var i = 0; i < 6; i++) {
        hex += alphabet.charAt(Math.floor(Math.random() * 7));
    }
   // console.log(hex);
    return hex;
}

// Given a hex number, increaseHex returns an incremented
// version of the hex number, with padding if needed
function increaseHex(code) {
  var dec = parseInt(code, 16) + 3;
  // if the increased value is over 255, then we reset it
  var newDec = (dec > 255) ? (dec - 256) : dec;
  // padding if it is under 16
  var hex = newDec.toString(16);
  var increased = (newDec < 16) ? "0" + hex : hex;
  return increased;
}

class Hex extends Component {
    constructor(props) {
        super(props);
        this.state = {colour: randomHex()};
        this.handleClick = this.handleClick.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
    }
    // Clicking the background will randomly change the colour
    handleClick(e) {
        e.preventDefault();
        this.setState({colour: randomHex()});
    }
    // Using the mouse wheel will gradually change the colour
    handleWheel(e) {
      console.log(this.state.colour);
      e.preventDefault();
      var red = increaseHex(this.state.colour.substring(1,3));
      var blue = increaseHex(this.state.colour.substring(3,5));
      var green = increaseHex(this.state.colour.substring(5));

      var newHex = "#" + red + blue + green;

      console.log(newHex);
      this.setState({colour:newHex});
    }
    render() {
      return(
        <div className="full" style={{backgroundColor: this.state.colour}}
             onClick={this.handleClick}
             onWheel={this.handleWheel}>
             <textarea autoFocus></textarea>
        </div>
        );
    }
}

export default Hex;
