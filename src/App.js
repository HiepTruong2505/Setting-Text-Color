import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12,
    };
  }
  onSetColor = (params) => {
    this.setState({ color: params });
  };
  onChangeSize = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
  };
  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 12,
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container mt-lg-5">
          <div className="row">
            <div className="col-6">
              <ColorPicker
                color={this.state.color}
                onReceiveColor={this.onSetColor}
              />
            </div>
            <div className="col-6">
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
              />
              <Reset onSettingDefault={this.onSettingDefault} />
            </div>
            <div className="col-12">
              <Result color={this.state.color} fontSize={this.state.fontSize} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
