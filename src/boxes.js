import React from "react";
import ReactDOM from "react-dom";

class Boxes extends React.Component {
  randomizeAll() {
    this.randomizeOne();
    this.randomizeTwo();
    this.randomizeThree();
    this.randomizeFour();
  }

  randomizeOne() {
    //first container
    var red1 = Math.floor(Math.random() * 255);
    var green1 = Math.floor(Math.random() * 255);
    var blue1 = Math.floor(Math.random() * 255);

    //convert to hex
    var rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };

    var fullColorHex = function(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };
    //**********************************************************

    this.setState({
      red1,
      blue1,
      green1,
      hexValue1: fullColorHex(red1, green1, blue1)
    });
  }

  randomizeTwo() {
    //first container
    var red2 = Math.floor(Math.random() * 255);
    var green2 = Math.floor(Math.random() * 255);
    var blue2 = Math.floor(Math.random() * 255);

    var rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };

    var fullColorHex = function(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };

    this.setState({
      red2,
      blue2,
      green2,
      hexValue2: fullColorHex(red2, green2, blue2)
    });
  }
  randomizeThree() {
    //first container
    var red3 = Math.floor(Math.random() * 255);
    var green3 = Math.floor(Math.random() * 255);
    var blue3 = Math.floor(Math.random() * 255);

    var rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };

    var fullColorHex = function(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };

    this.setState({
      red3,
      blue3,
      green3,
      hexValue3: fullColorHex(red3, green3, blue3)
    });
  }
  randomizeFour() {
    //first container
    var red4 = Math.floor(Math.random() * 255);
    var green4 = Math.floor(Math.random() * 255);
    var blue4 = Math.floor(Math.random() * 255);

    var rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };

    var fullColorHex = function(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };

    this.setState({
      red4,
      blue4,
      green4,
      hexValue4: fullColorHex(red4, green4, blue4)
    });
  }

  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      red1: undefined,
      red2: undefined,
      red3: undefined,
      red4: undefined,
      green1: undefined,
      green2: undefined,
      green3: undefined,
      green4: undefined,
      blue1: undefined,
      blue2: undefined,
      blue3: undefined,
      blue4: undefined,
      hexValue1: "",
      hexValue2: "",
      hexValue3: "",
      hexValue4: ""
    };
    this.randomizeOne = this.randomizeOne.bind(this);
    this.randomizeTwo = this.randomizeTwo.bind(this);
    this.randomizeThree = this.randomizeThree.bind(this);
    this.randomizeFour = this.randomizeFour.bind(this);
    this.randomizeAll = this.randomizeAll.bind(this);
  }

  render() {
    //style updates
    var containerOneStyle = {
      backgroundColor:
        "rgb(" +
        this.state.red1 +
        "," +
        this.state.green1 +
        "," +
        this.state.blue1 +
        ")"
    };

    var containerTwoStyle = {
      backgroundColor:
        "rgb(" +
        this.state.red2 +
        "," +
        this.state.green2 +
        "," +
        this.state.blue2 +
        ")"
    };

    var containerThreeStyle = {
      backgroundColor:
        "rgb(" +
        this.state.red3 +
        "," +
        this.state.green3 +
        "," +
        this.state.blue3 +
        ")"
    };

    var containerFourStyle = {
      backgroundColor:
        "rgb(" +
        this.state.red4 +
        "," +
        this.state.green4 +
        "," +
        this.state.blue4 +
        ")"
    };

    return (
      <div id="main-container">
        <div id="first-container" style={containerOneStyle}>
          <button onClick={this.randomizeOne}>Button 1</button>
          <p className="hex-value">#{this.state.hexValue1}</p>
          <p className="rgb-value">
            {this.state.red1},{this.state.green1},{this.state.blue1}
          </p>
          <button onClick={this.randomizeAll}>Randomize All</button>
        </div>
        <div id="second-container" style={containerTwoStyle}>
          <button onClick={this.randomizeTwo}>Button2</button>
          <p className="hex-value">#{this.state.hexValue2}</p>
          <p className="rgb-value">
            {this.state.red2},{this.state.green2},{this.state.blue2}
          </p>
        </div>
        <div id="third-container" style={containerThreeStyle}>
          <button onClick={this.randomizeThree}>Button 3</button>
          <p className="hex-value">#{this.state.hexValue3}</p>
          <p className="rgb-value">
            {this.state.red3},{this.state.green3},{this.state.blue3}
          </p>
        </div>
        <div id="fourth-container" style={containerFourStyle}>
          <button onClick={this.randomizeFour}>Button 4</button>
          <p className="hex-value">#{this.state.hexValue4}</p>
          <p className="rgb-value">
            {this.state.red4},{this.state.green4},{this.state.blue4}
          </p>
        </div>
      </div>
    );
  }
}

export default Boxes;
