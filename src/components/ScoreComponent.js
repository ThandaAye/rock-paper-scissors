import React, { Component } from 'react';
import '../RPS.css';

export default class ScoreComponent extends Component {

  render(){
    const { score } = this.props;
    const { youChose, computerChose, result, yourScore, computerScore } = score;
    return (
        <div>
            <div className="resultContainer">
          <p>You Chose: {youChose}</p>
          <p>Computer Chose: {computerChose}</p>
          <p>Result: {result}</p>
        </div>
        <div className="scoreContainer">
            <p>Score</p>
            <div className="scoreColumn">
                <p>{yourScore}</p>
                <p>You</p>
            </div>
            <div className="scoreColumn">
                <p>{computerScore}</p>
                <p>Computer</p>
            </div>
        </div>
        </div>
    );
  }
}
