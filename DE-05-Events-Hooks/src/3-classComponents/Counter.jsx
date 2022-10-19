import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }; //state ismi sabit Componentten geliyor
    this.artir = this.artir.bind(this); //Fonksiyonun kullanilabilmesi icin öncelikle burda baglama yapmaliyiz
  }

  artir() {
    this.setState({ count: this.state.count + 1 }); //setState de sabit
  }
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>COUNT (class component): {this.state.count}</h1>
        <button onClick={this.artir} className="btn btn-success">
          INCREMENT
        </button>
        <button className="btn btn-dark">DECREMENT</button>
      </div>
    );
  }
}
export default Counter;
