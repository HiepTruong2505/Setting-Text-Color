import React, { Component } from "react";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "orange"],
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    let elementcolor = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => {
            this.setActiveColor(color);
          }}
        ></span>
      );
    });
    return (
      <div>
        <div className="card text">
          <div className="card-header">Color Picker</div>
          <div className="card-body">
            {elementcolor}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
