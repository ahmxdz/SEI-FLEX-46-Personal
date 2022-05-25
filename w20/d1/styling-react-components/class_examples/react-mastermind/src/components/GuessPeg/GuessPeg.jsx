import React from 'react';
import './GuessPeg.css'

const GuessPeg = (props) => (
  <div className={`${props.color === '#FDE47F' ? 'primaryPeg': ''} GuessPegDiv`} style={{
    backgroundColor: props.color,
    color: props.color === '#FDE47F' ? 'black' : 'white'
  }} >
    {props.color} - Guess Peg
  </div>
);

export default GuessPeg;
