import React, { Component } from 'react';
import './App.css';
import './board.css'

class Square extends Component {

  render() {
    let { val } = this.props;
    console.log(val);
    return (
      <section onClick={this.props.squareClick}>
        <img width="50%" src={val} />
      </section>
    );
  }
}

export default Square;
