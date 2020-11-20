import React, { Component } from 'react'

class ResetButton extends Component{

// resetGame = () => {
//     this.props.resetGame(this.props.index)
//     }


  render(){
    return(
        <div id="resetbutton" onClick= { this.props.resetGame }>
          Reset Game! </div>
    )
  }
}

export default ResetButton
