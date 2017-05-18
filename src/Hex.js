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

class Hex extends Component {
    constructor(props) {
        super(props);
        this.state = {colour: randomHex()};
        this.handleClick = this.handleClick.bind(this);
    }
    // Clicking the background will change the colour
    handleClick(e) {
        e.preventDefault();
        this.setState({colour: randomHex()});
    }
    render() {
      return(
        <div className="full" style={{backgroundColor: this.state.colour}}
             onClick={this.handleClick}>
             <textarea autoFocus></textarea>
        </div>
        );
    }
}

export default Hex;
