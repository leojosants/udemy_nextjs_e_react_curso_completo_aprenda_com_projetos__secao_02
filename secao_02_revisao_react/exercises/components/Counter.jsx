import { Component } from "react";

export default class Counter extends Component {

  state = {
    number: this.props.valueInitial ?? 0,
    step: this.props.step ?? 1,
  };

  increment = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };

  decrement = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  changeStep = () => {
    // +e transforma em string
    this.setState({ step: +e.target.value })
  };
  
  renderForm() {
    return (
      <>
         <input
          type="number"
          min={1}
          max={1000}
          value={this.state.step}
          onChange={this.changeStep}
        />
        
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Counter (using Class)</h1>
        <h2>{this.state.number}</h2>
        {this.renderForm()}
      </div>
    );
  }
}