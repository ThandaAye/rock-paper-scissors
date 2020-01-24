import React, { Component } from 'react';
import {rockButton, paperButton, scissorsButton} from '../components/ImageLoader';
import '../RPS.css';

export default class ComVsComComponent extends Component {

  renderImage(chose){
    if(chose === 'paper') return <div>{paperButton(function(){})}</div>;
    else if(chose === 'scissors') return <div>{scissorsButton(function(){})}</div>;
    else return <div>{rockButton(function(){})}</div>;
  }

  render(){
    const { randomGenerateImg, player1Chose, player2Chose, type } = this.props || {};
    console.log('aaaaaaa', type);
    return (
        <div>
            <button disabled={type === 'start'} onClick={() => randomGenerateImg('start')}>Start</button>
            <button disabled={type === 'stop'} onClick={() => randomGenerateImg('stop')}>Stop</button>
            <div className="randomImgContainer">
              {this.renderImage(player1Chose)}
              {this.renderImage(player2Chose)}
            </div>
        </div>
    );
  }
}
