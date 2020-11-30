import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // declaring variables that will be used.
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" }); // the input is cleared out even if it has avalue in it before or not.
  };

  add = () => {
    this.setState({ previousNumber: this.state.input }); // the first value entered is stored in previousNumber before clearing the input.
    this.setState({input: "" }); // to clear the prev value in the input so that the next val can be stored.
    this.setState({ operator: "plus" }); // value of operator is stored here which will help in the evaluate method below.
  };

  subtract = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "subtract" });
  };

  multiply = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "multiply" });
  };

  divide = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "divide" });
  };

  modulus = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "modulus" });
  };

  evaluate = () => {
    // this evaluate (arrow function) method is formed to check the sign pressed and the perform the required operation afdter the use has entered one value.
    this.state.currentNumber = this.state.input; //here the next value is entered by the user.

    if (this.state.operator === "plus") {
      //if the opertor equals both in value and  type then we add the previous number with the current number entered..
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber) // parseFloat is used insteasd of poarseint because we need to see values in decimal numbers.
      });
    } else if (this.state.operator === "subtract") {
      //if the opertor equals both in value and  type then we subtracts the previous number with the current number entered..
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      //if the opertor equals both in value and  type then we multiply the previous number with the current number entered..
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      //if the opertor equals both in value and  type then we divide the previous number with the current number entered..
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "modulus") {
      //if the opertor equals both in value and  type then we take a modulus by dividing the previous number with the current number entered and securing the remainder..
      this.setState({
        input:
          parseFloat(this.state.previousNumber) %
          parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div
          className="calc-wrapper" //all buttons and input screen is all enwrapped in one whole wrap called calc-wrapper.
        >
          <div
            className="row" //each row contains set of buttons
          >
            <Button handleClick= {this.divide}>÷</Button>
            <Button handleClick={this.multiply}>x</Button>
            <Button handleClick={this.add}>+</Button>
            <Button handleClick={this.subtract}>-</Button>
            <Button handleClick={this.modulus}>%</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
