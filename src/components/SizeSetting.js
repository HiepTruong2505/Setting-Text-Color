import React, { Component } from "react";

export default class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div>
        <div className="card border-primary mb-3">
          <div className="card-header">Size: {this.props.fontSize} px</div>
          <div className="card-body text-primary">
            <button
              className="btn btn-success"
              onClick={() => this.changeSize(-2)}
            >
              Giảm
            </button>
            &nbsp;
            <button
              className="btn btn-success"
              onClick={() => this.changeSize(2)}
            >
              Tăng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
