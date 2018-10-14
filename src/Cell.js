import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
<<<<<<< HEAD
    this.setState({
      color: this.props.getSelectedColor()
=======
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
>>>>>>> ae1649aad06947fb00597e4f80c66de40198d9ba
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
=======
      <div className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
>>>>>>> ae1649aad06947fb00597e4f80c66de40198d9ba
      </div>
    )
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> ae1649aad06947fb00597e4f80c66de40198d9ba
