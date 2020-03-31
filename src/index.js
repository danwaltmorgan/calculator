import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Numbers from './numbers'
import Operations from './operations'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      total: "0"
    }
  }

  handleData = (data) => {
    if (data === "." && this.state.total.includes(".")) {
      return;
    }
    if (this.state.total == "0" && data != "."){
      this.setState({total : data.toString(), operation: data.toString()})
    }
    else {
      this.setState({
        total: this.state.total + data.toString(),
        operation: this.state.operation + data.toString()
      })
    }
  }

  handleOperation = (op) => {
    let output = this.state.operation + op
    if (op === "CE") {
      output = "0";
      op = "0"
    }
    if (op === "=") {
      this.handleEquals()
      return;
    }
    this.setState({
      total: op,
      operation: output
    })
  }

  handleEquals() {
    let total = this.state.operation;
    let regex = /[\+|\*|\/|\-]{2,}/
    let negNum = /(\-\d)/
    let negReg = /[\+|\*|\/]{2,}/
    // console.log(negNum.test(total))
    // console.log(total.match(regex))
    if (!negNum.test(total)) {
      while(regex.test(total)) {
        let index = total.match(regex).index
        total = total.split("")
        total.splice(index, 1)
        total = total.join("")
      }
    } else {
      while(negReg.test(total)) {
        let index = total.match(negReg).index
        total = total.split("")
        total.splice(index, 1)
        total = total.join("")
      }
    }
    console.log(total)
    total = eval(total)
    this.setState({
      total: total,
      operation: total
    })
  }

  render() {
    return (
      <div id="caculator">
        <div id="output">
          {this.state.operation} <br />
        </div>
        <div id="display">
          {this.state.total}</div>
        <div id="button-wrapper">
          <Numbers update={this.handleData} />
          <Operations update={this.handleOperation} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
