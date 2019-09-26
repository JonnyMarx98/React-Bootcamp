import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLightStartsOn: 0
  }

  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    }
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let {ncols, nrows} = this.props;
    // TODO: create array-of-arrays of true/false values
    for(var i = 0; i < nrows; i++){
      board.push([]);
      for(var j = 0; j < ncols; j++){
        board[i].push(Math.random() < this.props.chanceLightStartsOn);
      }
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    console.log(y, x);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    // checks every cell and checks if true, if true set hasWon false
    let hasWon = board.every(row => row.every(cell => !cell));
    // board.map(r => {
    //   r.map(c => {
    //     if(c){
    //       hasWon = false;
    //     }
    //   })
    // })
    this.setState({board, hasWon});
    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    if(this.state.hasWon){
      return (
        <div>
          <div className="neon">YOU</div>
          <div className="flux">WIN!</div>
        </div>
      )
    }
    return(
      <div>
        <div className="Board-title">
          <div className="neon">Lights</div>
          <div className="flux">Out</div>
        </div>
        
        <table className="Board">
          <tbody>
            {this.state.board.map((row, y) => (
              <tr>
                {row.map((col, x) => (
                  <Cell 
                  key={`${y}-${x}`} 
                  coord={`${y}-${x}`} 
                  isLit={col} 
                  flipCellsAround={this.flipCellsAround}/> 
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // if the game is won, just show a winning msg & render nothing else

    // TODO
    
    // make table board
    

    // TODO
    )
    
  }
}


export default Board;
