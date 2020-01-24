import React, { Component } from 'react';
import ScoreComponent from '../components/ScoreComponent';
import RadioComponent from '../components/RadioComponent';
import YouVsComComponent from '../components/youVsComComponent';
import ComVsComComponent from '../components/comVsComComponent';
import '../RPS.css';

const initialState = {
  player1Chose: '-',
  player2Chose: '-',
  result: '-',
  player1Score: 0,
  player2Score: 0,
  selectedOption: 'youVsCom',
  choices: ['rock', 'paper', 'scissors'],
  type: 'stop'
};

export default class RockPaperScissors extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  resetState = () => {
    this.setState(initialState);
   }

  calculateScore = (player1Chose, player2Chose, type) => {
    let {player1Score, player2Score, result, selectedOption} = this.state;
    if(player1Chose === player2Chose && player1Chose === '-'){
      return;
    }
    if(player1Chose === player2Chose){
      result = 'Tie';
    }else if(player1Chose === 'rock' && player2Chose === 'scissors' || 
            player1Chose === 'scissors' && player2Chose === 'paper' || 
            player1Chose === 'paper' && player2Chose === 'rock'){
      result = selectedOption === 'youVsCom' ? 'You Win' : 'Computer 1 Wins';
      player1Score++;
    }else{
      result = selectedOption === 'youVsCom' ? 'Computer Wins' : 'Computer 2 Wins';
      player2Score++;
    }
    this.setState({player1Chose, player2Chose, player1Score, player2Score, result})
  }

  onClick = (value) => {
    const { choices } = this.state;
    let computerChose = choices[Math.floor(Math.random()*choices.length)];
    this.calculateScore(value, computerChose);
  }

  radioChange = (e) => {
    this.resetState();
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  randomGenerateImg = (type) => {
    this.setState({type}, () => {
      if(type === 'start'){
        this.startInterval = setInterval(() => {
          const { choices, start } = this.state;
          let player1Chose = choices[Math.floor(Math.random()*choices.length)];
          let player2Chose = choices[Math.floor(Math.random()*choices.length)];
          this.setState({player1Chose, player2Chose});
        }, 200);
      }else{
        const { player1Chose, player2Chose } = this.state;
        this.calculateScore(player1Chose, player2Chose);
        clearInterval(this.startInterval);
      }
    });
  }

  render(){
    const {selectedOption, player1Chose, player2Chose, type} = this.state;
    return (
      <div className="rpsContainer">
        <h1>How to play</h1>
        <p>Rock beats Scissors | Scissors beats Paper | Paper beats Rock</p>
        <RadioComponent 
          selectedOption={selectedOption} 
          radioChange={this.radioChange}
        />
        {(selectedOption==='youVsCom') ? (
          <YouVsComComponent 
            onClick={(val) => this.onClick(val)}
          />
        ):(
          <ComVsComComponent 
            randomGenerateImg={(val) => this.randomGenerateImg(val)}
            player1Chose={player1Chose}
            player2Chose={player2Chose}
            type={type}
          />
        )}        
        <ScoreComponent score={this.state}/>
      </div>
    );
  }
}
