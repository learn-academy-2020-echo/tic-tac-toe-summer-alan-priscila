import React, { Component } from 'react'
import Square from './components/Square'
import ResetButton from './components/ResetButton.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: "🐶",
      gameOver: "no"
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
//if state = dog then make it so state can't be changed to cat vise

handleGamePlay = (index) => {
  const { squares, currentPlayer, gameOver } = this.state
  // if square = empty, then its possible to play the game,
  // if square has any value then it won't run any command
  if (squares[index] === null && gameOver === "no"){
  //if current player is dog then set state to cat
  // then if current play is cat set state to dog
          if(currentPlayer === "🐶"){
          squares[index] = "🐶"
          this.setState({squares: squares, currentPlayer: "🐱"})

        } else {
           squares[index] = "🐱"
           this.setState({squares: squares, currentPlayer: "🐶"})
          }
  } else if(((squares[0] === "🐶") && (squares[1] === "🐶") && (squares[2] === "🐶"))||
           ((squares[3] === "🐶") && (squares[4] === "🐶") && (squares[5] === "🐶")) ||
           ((squares[6] === "🐶") && (squares[7] === "🐶") && (squares[8] === "🐶")) ||
           ((squares[0] === "🐶") && (squares[3] === "🐶") && (squares[6] === "🐶")) ||
           ((squares[1] === "🐶") && (squares[4] === "🐶") && (squares[7] === "🐶")) ||
           ((squares[2] === "🐶") && (squares[5] === "🐶") && (squares[8] === "🐶")) ||
           ((squares[0] === "🐶") && (squares[4] === "🐶") && (squares[8] === "🐶")) ||
           ((squares[2] === "🐶") && (squares[4] === "🐶") && (squares[6] === "🐶")))
       {alert("🐶 is the winner!")
       this.setState({ gameOver: "yes" })
       //we need another return here that states if the dog winning condition is met, prevent any action from happening on click
       //if one of the winning conditions is met, prevent the handleGamePlay from happening
  } else if(((squares[0] === "🐱") && (squares[1] === "🐱") && (squares[2] === "🐱"))||
          ((squares[3] === "🐱") && (squares[4] === "🐱") && (squares[5] === "🐱")) ||
          ((squares[6] === "🐱") && (squares[7] === "🐱") && (squares[8] === "🐱")) ||
          ((squares[0] === "🐱") && (squares[3] === "🐱") && (squares[6] === "🐱")) ||
          ((squares[1] === "🐱") && (squares[4] === "🐱") && (squares[7] === "🐱")) ||
          ((squares[2] === "🐱") && (squares[5] === "🐱") && (squares[8] === "🐱")) ||
          ((squares[0] === "🐱") && (squares[4] === "🐱") && (squares[8] === "🐱")) ||
          ((squares[2] === "🐱") && (squares[4] === "🐱") && (squares[6] === "🐱")))
          {alert("🐱 is the winner!")
          this.setState({ gameOver: "yes" })
  } else {
    alert("Please reset the game!")
  }
}

// resetGame = () => {
//   const { squares } = this.state
//   this.setState({ squares: Array(9).fill(null) })
// }

  render(){
    return(

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


        <ResetButton />
    



      </React.Fragment>
    )
  }
}
export default App
