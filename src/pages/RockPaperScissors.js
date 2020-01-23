import React, { Component } from 'react';
import {rockButton, paperButton, scissorsButton} from '../components/ImageLoader';
import ScoreComponent from '../components/ScoreComponent'
import '../RPS.css';

export default class RockPaperScissors extends Component {

  state = {
    youChose: '-',
    computerChose: '-',
    result: '-',
    yourScore: 0,
    computerScore: 0
  }

  calculateScore = (youChose, computerChose) => {
    let {yourScore, computerScore, result} = this.state;
    if(youChose === computerChose){
      result = 'Tie';
    }else if(youChose === 'rock' && computerChose === 'scissors' || 
              youChose === 'scissors' && computerChose === 'paper' || 
              youChose === 'paper' && computerChose === 'rock'){
      result = 'You Win';
      yourScore++;
    }else{
      result = 'Computer Wins';
      computerScore++;
    }
    this.setState({youChose, computerChose, yourScore, computerScore, result})
  }

  onClick = (value) => {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChose = choices[Math.floor(Math.random()*choices.length)];
    this.calculateScore(value, computerChose);
  }

  render(){
    return (
      <div className="rpsContainer">
        <h1>How to play</h1>
        <p>Rock beats Scissors | Scissors beats Paper | Paper beats Rock</p>
          {rockButton((val) => this.onClick(val))}
          {paperButton((val) => this.onClick(val))}
          {scissorsButton((val) => this.onClick(val))}
        <ScoreComponent score={this.state}/>
      </div>
    );
  }
}
