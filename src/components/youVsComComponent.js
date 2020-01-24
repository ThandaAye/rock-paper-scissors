import React, { Component } from 'react';
import {rockButton, paperButton, scissorsButton} from '../components/ImageLoader';
import '../RPS.css';

export default class YouVsComComponent extends Component {
  render(){
    const { onClick } = this.props;
    return (
        <div>
            {rockButton((val) => onClick(val))}
            {paperButton((val) => onClick(val))}
            {scissorsButton((val) => onClick(val))}
        </div>
    );
  }
}
