import React from 'react';
import './App.css';

export const boardFaceStyles ={
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  background: 'black',
  width: '100%',
  height: '100%',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
}

export let gridSquareStyle = {
width: '15',
height: '15',
border: 'solid',
borderWidth: '.1',
borderColor: 'rgba(0,0,0)',
backgroundColor: 'white',
fontSize: '8',
}

export const containerStyles = {
  background: 'black',
   width: '1065',
   height: '100%',
   marginBottom: '100',
   marginTop: '50',
   }
 export const buttonStyle={
   display: 'flex',
   justifyContent: 'center',
 }
 export const generationStyle = {
        display: 'flex',
 justifyContent: 'center',
     alignContent: 'center',
     color: 'white',
     fontFamily: 'Arial',
   fontSize: '20',
   margin: '20',
   marginBottom: '5',
 }

export const Grid = (props) =>{  
const gridSquare = props.board.map((value, index) => {
  return (
    <div style={gridSquareStyle} className ={'cell ' + (value === 0 ? 'dead' : 'alive')} id={index} onClick={() => props.handleClick(index)}>
    </div>
  )
});
return (
<div className="boardFace" style={boardFaceStyles}>
        {gridSquare}
</div>
  )
}


class App extends React.Component {
constructor(props) {
super(props)
this.state = {
  x: [],
  initialLiveCells: 7,
  board: 4188,
  generation: 0,
}
// this.initialize = this.initialize.bind(this);
this.phaseOne = this.phaseOne.bind(this);
this.start = this.start.bind(this);
this.stop = this.stop.bind(this);
this.reset = this.reset.bind(this);
this.clickHandler = this.clickHandler.bind(this);
this.clear = this.clear.bind(this);

this.initialize(this.state.board, this.state.initialLiveCells);

}

initialize(board, initial) {
for (let x=0; x<= this.state.board; x++){      
  this.state.x.push(Math.round(Math.pow(Math.random(), this.state.initialLiveCells)))
} 
  this.setState({x: this.state.x});
}

phaseOne(){
let boardState;
boardState = this.state.x.map( (item, index) => {
  if (item === 0) {
        let counter = 0;
    //iterate over values surrounding live cell ==>
        if (this.state.x[index - 72] !== undefined && this.state.x[index - 72] === 1){
          counter++;             
        }
        if (this.state.x[index - 71] !== undefined && this.state.x[index - 71] === 1){
          counter++;             
        }
        if (this.state.x[index - 70] !== undefined && this.state.x[index - 70] === 1){
          counter++;             
        }
        if (this.state.x[index - 1] !== undefined && this.state.x[index - 1] === 1){
          counter++;             
        }
        if (this.state.x[index + 1] !== undefined && this.state.x[index + 1] === 1){
          counter++;             
        }
        if (this.state.x[index + 70] !== undefined && this.state.x[index + 70] === 1){
          counter++;             
        }
        if (this.state.x[index + 71] !== undefined && this.state.x[index + 71] === 1){
          counter++;             
        }
        if (this.state.x[index + 72] !== undefined && this.state.x[index + 72] === 1){
          counter++;             
        }
        if (counter === 3){
          return item = 1;
        }  
        else {
          return item
        }
    } // end item == 0       
    else if (item === 1) {
    //iterate over values surrounding live cell ==>
        let counter = 0;
        if (this.state.x[index - 72] !== undefined && this.state.x[index - 72] === 1){
          counter++;             
        }
        if (this.state.x[index - 71] !== undefined && this.state.x[index - 71] === 1){
          counter++;             
        }
        if (this.state.x[index - 70] !== undefined && this.state.x[index - 70] === 1){
          counter++;             
        }
        if (this.state.x[index - 1] !== undefined && this.state.x[index - 1] === 1){
          counter++;             
        }
        if (this.state.x[index + 1] !== undefined && this.state.x[index + 1] === 1){
          counter++;             
        }
        if (this.state.x[index + 70] !== undefined && this.state.x[index + 70] === 1){
          counter++;             
        }
        if (this.state.x[index + 71] !== undefined && this.state.x[index + 71] === 1){
          counter++;             
        }
        if (this.state.x[index + 72] !== undefined && this.state.x[index + 72] === 1){
          counter++;             
        }
        if (counter < 2){
          return item = 0;
        }
        else if (counter > 3){
          return item = 0;
        }
        else {
          return item;
        }
    } // if Item === 1 end        
}); // board MAP END
this.setState({x: boardState});
this.phaseTwo(boardState)
} // PHASE ONE END

phaseTwo(boardState){
let phaseTwoState = boardState.map( (item, index) => {
      if (item === 0) {
         let counter = 0;
    //iterate over values surrounding live cell ==>
        if (boardState[index - 72] !== undefined && boardState[index - 72] === 1){
          counter++;             
        }
        if (boardState[index - 71] !== undefined && boardState[index - 71] === 1){
          counter++;             
        }
        if (boardState[index - 70] !== undefined && boardState[index - 70] === 1){
          counter++;             
        }
        if (boardState[index - 1] !== undefined && boardState[index - 1] === 1){
          counter++;             
        }
        if (boardState[index + 1] !== undefined && boardState[index + 1] === 1){
          counter++;             
        }
        if (boardState[index + 70] !== undefined && boardState[index + 70] === 1){
          counter++;             
        }
        if (boardState[index + 71] !== undefined && boardState[index + 71] === 1){
          counter++;             
        }
        if (boardState[index + 72] !== undefined && boardState[index + 72] === 1){
          counter++;             
        }
        if (counter === 3){
          return item = 1;
        }
        else {
          return item;
        }
    } // END ITEM === 0  
     else if (item === 1) {
    //iterate over values surrounding live cell ==>
        let counter = 0;
        if (boardState[index - 72] !== undefined && boardState[index - 72] === 1){
          counter++;             
        }
        if (boardState[index - 71] !== undefined && boardState[index - 71] === 1){
          counter++;             
        }
        if (boardState[index - 70] !== undefined && boardState[index - 70] === 1){
          counter++;             
        }
        if (boardState[index - 1] !== undefined && boardState[index - 1] === 1){
          counter++;             
        }
        if (boardState[index + 1] !== undefined && boardState[index + 1] === 1){
          counter++;             
        }
        if (boardState[index + 70] !== undefined && boardState[index + 70] === 1){
          counter++;             
        }
        if (boardState[index + 71] !== undefined && boardState[index + 71] === 1){
          counter++;             
        }
        if (boardState[index + 72] !== undefined && boardState[index + 72] === 1){
          counter++;             
        }
      if (counter < 2){
        return item = 0;
      }
      else if (counter > 3){
        return item = 0;
      }                
       else {
         return item;
       }
    } // if Item === 1 end       
});
this.setState({x: phaseTwoState});
this.setState((prevState)=> {
  prevState.generation += 1
})
} //end phasetwo

stop(){
clearInterval(this.timerId)
}

start(){
this.phaseOne()
this.timerId = setInterval(() => this.phaseOne());
}

reset(){
this.stop();
this.state.x = [];
this.initialize(this.state.board, this.state.initialLiveCells);
}

clickHandler(index){
this.state.x[index] = 1;
this.setState(this.state);
}

clear(){
clearInterval(this.timerId);
this.state.x = [];
 for (let x=0; x<= this.state.board; x++){      
  this.state.x.push(0);
} 
  this.setState({
    x: this.state.x,
  generation: 0,
  });
}

componentWillUnmount(){
clearInterval(this.timerId);
}

render() {


return (
  <div className="container">
    <div style={containerStyles}>
      <h1 className="title" style={{color: 'white', fontFamily: 'Arial', fontVariant: 'small-caps', textAlign: 'center'}}>The Game of Life</h1>
      <div className="align-center" style={buttonStyle}>
        <button className="btn btn-success start" onClick={()=>this.start()} style={{margin: '10', marginBottom: '0'}}>Start</button>
        <button className="btn btn-danger stop" onClick={()=>this.stop()} style={{margin: '10', marginBottom: '0'}}>Stop</button>
        <button className="btn btn-info reset" onClick={()=>this.reset()} style={{margin: '10', marginBottom: '0'}}>Reset</button>
        <button className="btn btn-secondary" onClick={()=>this.clear()} style = {{margin: '10', marginBottom: '0'}}>Clear</button>
      </div>
        <div className="generation" style={generationStyle}>
          <div>Generation: {this.state.generation}</div>
      </div>
                    <div style={{color: 'white', textAlign: 'center', width: '100%', marginBottom: '10'}}> click on the squares below to add a live cell!<br /> <br />
                      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Learn more</a> about <strong>The Game of Life</strong></div>
      <Grid board={this.state.x} handleClick={(index) => this.clickHandler(index)}/>
    </div>
  </div>
)
};

}

export default App;
