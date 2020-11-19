import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: "🐶"
    }
  }
// Create a function that allows alternating emojis to appear on even/odd indexes
// We need to define the winner of tic tac toe as being indexes that are 
// 0,1,2, 
// 3,4,5
// 6,7,8
// 0,3,6
// 1,4,7
// 2,5,8
// 0,4,8
// 2,4,6 there will be 8 possibles winning outcomes
// we have to change player after each click.
// Each click will be alternating between our two emojis
// if one of the conditions where the 8 possible winning outcomes is met, then we can have a set State that brings all indexes or changes the state of all emojis to empty strings (reset button)
// adding another button to the render to change all of the emojis back to an empty string
// avoiding clicking on the same box twice

handleGamePlay = (index) => {
  const { squares, currentPlayer } = this.state
  if( currentPlayer === "🐶"){
  squares[index] = "🐶"
  this.setState({squares: squares, currentPlayer: "🐱"})

  
 } else {
   squares[index] = "🐱"
   this.setState({squares: squares, currentPlayer: "🐶"})
 }
}

// handleGamePlay = (index) => {
//     const { squares, treasureLocation } = this.state
//   if(index === treasureLocation){
//     squares[index] = "💎"
//     this.setState({squares: squares})
//   } else{
//     squares[index] = "🌴"
//    this.setState({squares: squares})
//    }
//   }
  
  render(){
    return(
      // remember to change handleGamePlay inside square component : 
                // this is the syntax we need to rename on line 27
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
        { this.state.squares.map((value, index) =>{
            return (
              <Square
              value ={ value }
              key={ index }
              index={ index }
               handleGamePlay= { this.handleGamePlay }
              
              />
            )
          })
        }
       
        </div>
      
      </React.Fragment>
    )
  }
}
export default App
