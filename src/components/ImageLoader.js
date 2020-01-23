import React from 'react';
import RockIcon from '../images/rock-icon.jpeg';
import PaperIcon from '../images/paper-icon.jpeg';
import ScissorsIcon from '../images/scissors-icon.jpeg';
import '../RPS.css';

export const rockButton = (action) => {
  return (
    <button className="imageButton" onClick={() => action('rock')}>
      <img src={RockIcon} className="Rock-logo" alt="rock" />
    </button>
  );
}

export const paperButton = (action) => {
  return (
    <button className="imageButton" onClick={() => action('paper')}>
    <img src={PaperIcon} className="Paper-logo" alt="paper" />
    </button>
  );
}

export const scissorsButton = (action) => {
  return (
    <button className="imageButton" onClick={() => action('scissors')}>
      <img src={ScissorsIcon} className="Scissors-logo" alt="scissors" />
    </button>
  );
}
