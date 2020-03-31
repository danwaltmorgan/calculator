import React from 'react';
import { operations } from './data'

class Operations extends React.Component {

  handleOperation(op) {
    this.props.update(op)
  }

  render() {
    let buttons = operations.map(op => {
      return <button
        id={op.id}
        key={op.id}
        className="opBut"
        onClick={this.handleOperation.bind(this, op.value)}>
        {op.value}
      </button>
    })
    return (
      <div id="operations">
        {buttons}
      </div>
    )
  }
}


export default Operations
