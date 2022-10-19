import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count || 0 }; //Bunun anlami da disardan gelen bir props var ise onu yazdir yoksa 0 yazdir
    // this.state = { count: 0 }; //state ismi sabit Componentten geliyor
    //this.state = {count : props.count} --> Eger App.jsden data olarak gönderdigim degeri kullanmak istersem props olarak aldigim degeri kulllanirim. Eger data almiycaksam disaardan constructor ici ve super ici bosbirakilir !!!!!

    this.artir = this.artir.bind(this); //Fonksiyonun kullanilabilmesi icin öncelikle burda baglama yapmaliyiz

    this.azalt = this.azalt.bind(this); //Fonksiyonun kullanilabilmesi icin öncelikle burda baglama yapmaliyiz
  }
  //arrwo function this de calismadigi icin bu tür fonksiyonu kullandik
  artir() {
    this.setState({ count: this.state.count + 1 }); //setState de sabit
  }
  azalt() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>************************************************</h1>
        <h1 className="text-danger">WITH CLASSES</h1>
        <h1>COUNT (class component): {this.state.count}</h1>
        <button onClick={this.artir} className="btn btn-success">
          INCREMENT
        </button>
        <button onClick={this.azalt} className="btn btn-dark">
          DECREMENT
        </button>
      </div>
    );
  }
}
export default Counter;
