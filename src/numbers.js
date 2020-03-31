import React from 'react';
import { numbers } from './data.js'

class Numbers extends React.Component {

  handleClick = (number) => {
    this.props.update(number)
  }

  render() {
    const buttons = numbers.map(num => {
      return <button
        className="numBut"
        id={num.id}
        key={num.id}
        onClick={this.handleClick.bind(this, num.value)}
        >
        {num.value}
      </button>
    })


    return (
      <div id="wrapper">
        <div className="row">
          {buttons[0]}
          {buttons[1]}
          {buttons[2]}
        </div>
        <div className="row">
          {buttons[3]}
          {buttons[4]}
          {buttons[5]}
        </div><div className="row">
          {buttons[6]}
          {buttons[7]}
          {buttons[8]}
        </div><div className="row">
          {buttons[9]}
          {buttons[10]}
        </div>
      </div>
    )
  }
}

export default Numbers
