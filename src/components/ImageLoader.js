import React from 'react';
import RockIcon from '../images/rock-icon.png';
import PaperIcon from '../images/paper-icon.png';
import ScissorsIcon from '../images/scissors-icon.png';
import '../RPS.css';

export const rockButton = (action) => {
  return (
    <img src={RockIcon} className="logo" alt="rock" onClick={() => action('rock')} />
  );
}

export const paperButton = (action) => {
  return (
    <img src={PaperIcon} className="logo" alt="paper" onClick={() => action('paper')} />
  );
}

export const scissorsButton = (action) => {
  return (
    <img src={ScissorsIcon} className="logo" alt="scissors" onClick={() => action('scissors')} />
  );
}
