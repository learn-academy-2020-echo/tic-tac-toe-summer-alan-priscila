import React, { Component } from 'react'

class Square extends Component{

handleClick = () => {
    this.props.handleGamePlay(this.props.index)
    }

// winner = () => {
//     this.props.winner(this.props.index)
//   }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick= { this.handleClick } >
          { this.props.value }</div>
      </React.Fragment>
    )
  }
}
export default Square
