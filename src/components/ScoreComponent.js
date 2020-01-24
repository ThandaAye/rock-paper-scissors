import React, { Component } from 'react';
import '../RPS.css';

export default class ScoreComponent extends Component {
  render(){
    const { score } = this.props || {};
    const { player1Chose, player2Chose, result, player1Score, player2Score, selectedOption } = score;
    return (
        <div>
          <div className="resultContainer">
          <p>{selectedOption === 'youVsCom' ? 'You Chose:' : 'Computer 1 Chose:'} {player1Chose}</p>
          <p>{selectedOption === 'youVsCom' ? 'Computer Chose:' : 'Computer 2 Chose:'}: {player2Chose}</p>
          <p>Result: {result}</p>
        </div>
        <div className="scoreContainer">
            <p>Score</p>
            <div className="scoreColumn">
                <p>{player1Score}</p>
                <p>{selectedOption === 'youVsCom' ? 'You' : 'Computer 1'}</p>
            </div>
            <div className="scoreColumn">
                <p>{player2Score}</p>
                <p>{selectedOption === 'youVsCom' ? 'Computer 1' : 'Computer 2'}</p>
            </div>
        </div>
        </div>
    );
  }
}
