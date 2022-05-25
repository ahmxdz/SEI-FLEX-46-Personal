import React from 'react';
import styles from './GameTimer.module.css';

class GameTimer extends React.Component {
  componentDidMount(){
    this.timerId = setInterval(this.props.handleTick, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  formatTime(seconds) {
    let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }


  render() {
    return (
      <div className={`${styles.GameTimer} flex-h`}>
        {/* <button onClick={this.props.handleTick}>Timer Button</button> */}
        {this.formatTime(this.props.elapsedTime)}
     </div>
    )
  }
}

// const GameTimer = (props) => (
//   <div className={`${styles.GameTimer} flex-h`}>
//     {props.elapsedTime}
//     <button onClick={props.handleTick}>Timer Button</button>
//   </div>
// );

export default GameTimer;
