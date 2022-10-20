//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca bileşenler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* Bileşenin ölümü (DOM ağacından kaldırılıyor)

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) componentin oluşturulmasında çağrılır
  constructor(props) {
    console.log("Constructor is running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-) component  monte edildiğinde çağrılır
  //! (right after the first render).
  //! It is called only once in a lifecycle.
  componentDidMount() {
    console.log("Component mounted");
  }

  //! 4-) bileşen güncellenir ve yeniden oluşturulur hemen sonrasında çağrılır.
  //! It receives the prevState and prevProps as parameters
  //! and can also access the newly changed state or props.
  componentDidUpdate() {
    console.log("Component updated");
  }

  //! 5-) bileşen DOM'dan kaldırılmadan önce çağrılır
  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  //! 2-) her oluşturmada çağrılır (Bileşeni DOM'a çizme)
  render() {
    console.log("Component Rendered");
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
