import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  isOperator = (val) => {
    // if it is a number return true....
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        // if the entered val is a number then dont change anything whereas if it is an operator then pass it to the operator.
        className={`button ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
        
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
