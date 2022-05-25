import React, {useState, useEffect} from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css';
import StudentAdder from '../StudentAdder/StudentAdder'

const GameBoard = (props) => {
  const [students, setStudentList] = useState([])

  // componentDidMount equivalent
  useEffect(() => {
    const urlPath = '/students';
    fetch(urlPath)
      .then((resp) => resp.json())
      .then((resp) => {
        setStudentList(resp.data)
      })
  }, [])

  return (
    <div className={styles.GameBoard}>
    
      <StudentAdder addStudentToList={(student) => {
        const allStudents = [...students, student]
        setStudentList(allStudents)
      }}/>
      
      {students.map((student) => (
        <div key={student._id}>
          <div>{student.firstName} {student.lastName}</div>
        </div>
       ))
      }

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
};

export default GameBoard;
