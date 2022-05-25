import React from 'react';
import { Button } from 'react-bootstrap'
import "./NewGameButton.css"

const NewGameButton = (props) => (
  <div>
    <button className="btn btn-primary btn-sm">
      New Game
    </button>
    <Button variant="primary" size="lg">New Game</Button>
  </div>
);

export default NewGameButton;
