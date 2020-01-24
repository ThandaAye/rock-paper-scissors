import React, { Component } from 'react';
import '../RPS.css';

export default class RadioComponent extends Component {
  render(){
    const { selectedOption, radioChange } = this.props;
    return (
        <div className='radioContainer'>
          <input type="radio"
                value="youVsCom"
                checked={selectedOption === "youVsCom"}
                onChange={radioChange} />You Vs Computer
          <input type="radio"
                value="comVsCom"
                style={{marginLeft: '35px'}}
                checked={selectedOption === "comVsCom"}
                onChange={radioChange}/>Computer Vs Computer
        </div> 
    );
  }
}
