import React, {useState, useEffect} from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css';

const GameBoard = (props) => (
  const [dataArr, setDataArr] = useState([])


  useEffect(() => {
    const urlPath = '/data';

    fetch(urlPath)
    .then((response) => response.json())
    .then((response) => {
      setDataArr(response.data)
    })
  }, [])

   return (
     
  <div className={styles.GameBoard}>
    sample Text 
    {dataArr.map((student) => {
      <>
      <div> {student.firstName}</div> 
      </>
    })}
    {props.guesses.map((guess, idx) =>
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === (props.guesses.length - 1)}
        handlePegClick={props.handlePegClick}
        handleScoreClick={props.handleScoreClick}
        key={idx}
      />
    )}
  </div>
  )
);

export default GameBoard;
