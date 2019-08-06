import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      result: ""
    };
    this.number1 = this.number1.bind(this);
    this.number2 = this.number2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
  }
  number1(event) {
    this.setState({
      number1: parseInt(event.target.value)
    });
  }

  number2(event) {
    this.setState({
      number2: parseInt(event.target.value)
    });
  }

  add() {
    var result = this.state.number1 + this.state.number2;
    this.setState({
      result: result
    });
  }
  
  sub() {
    var result = this.state.number1 - this.state.number2;
    this.setState({
      result: result
    });
  }

  mul() {
    var result = this.state.number1 * this.state.number2;
    this.setState({
      result: result
    });
  }

  div() {
    var result = this.state.number1 / this.state.number2;
    this.setState({
      result: result
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <h3>A simple calculator</h3>
            <input
              type="number"
              className="form-control"
              onChange={this.number1}
            />
            <input
              type="number"
              className="form-control"
              onChange={this.number2}
            />
            <br />
            <p>{this.state.result}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.mul}>*</button>
            <button onClick={this.div}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
