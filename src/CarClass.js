import React from 'react';

class CarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "Yellow",
      year: 1964
    };
  }
//   static getDerivedStateFromProps(props, state) {
//     return {color: props.color };
//   }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellowish"})
    }, 1000)
  }
  changeColor = () => {
    // Always use the setState() method to change the state object
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} <br></br>
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
  
}

export default CarClass;