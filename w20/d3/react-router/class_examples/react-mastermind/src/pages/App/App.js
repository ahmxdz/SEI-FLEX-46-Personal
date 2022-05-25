import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import GamePage from '../../pages/GamePage/GamePage'
import Settings from '../../pages/Settings/Settings'

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode()
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  handlePegClick = (pegIdx) => {
    // Get index of last guess object
    let currentGuessIdx = this.state.guesses.length - 1;

    // Always replace objects/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessesCopy[currentGuessIdx]};
    let codeCopy = [...guessCopy.code];

    // Update the NEW code array with the currently selected color
    codeCopy[pegIdx] = this.state.selColorIdx;

    // Update the NEW guess object
    guessCopy.code = codeCopy;

    // Update the NEW guesses array
    guessesCopy[currentGuessIdx] = guessCopy;

    // Update state with the NEW guesses array
    this.setState({
        guesses: guessesCopy
    });
  }

  handleScoreClick = () => {
    // Need the index of the current guess object (last object in guesses array)
    let currentGuessIdx = this.state.guesses.length - 1;

    // Create "working" copies of the "guessed" code and the secret
    // code so that we can modify them as we compute the number of
    // perfect and almost without messing up the actual ones in state
    let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0, almost = 0;

    // First pass computes number of "perfect"
    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        // Ensure same choice is not matched again
        // by updating both elements in the "working"
        // arrays to null
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    // Second pass computes number of "almost"
    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        // Again, ensure same choice is not matched again
        secretCodeCopy[foundIdx] = null;
      }
    });

    // State must only be updated with NEW objects/arrays
        // Always replace objects/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessesCopy[currentGuessIdx]};
    let scoreCopy = {...guessCopy.score};

    // Set scores
    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    // Update the NEW guess with the NEW score object
    guessCopy.score = scoreCopy;

    // Update the NEW guesses with the NEW guess object
    guessesCopy[currentGuessIdx] = guessCopy;

    // Add a new guess if not a winner
    if (perfect !== 4) guessesCopy.push(this.getNewGuess());

    // Finally, update the state with the NEW guesses array
    this.setState({
      guesses: guessesCopy
    });
  }

  switchExample() {
    const name = 'Jessica'

    switch (name) {
      case 'Jessica':
        console.log('Jessica')
        break;
      case 'Raj':
        console.log('Raj')
        break;
      default:
        console.log('Name not found')
    }

    if (name === 'Jessica') {
      console.log('Jessica')
    } else if (name === 'Raj') {
      console.log('Raj')
    }

  }

  render() {
    const projects = [
      {id: '1234', description: 'proj 1'},
      {id: '4567', description: 'proj 2'}
    ];

    let winTries = this.getWinTries();
    return (
        <div className="App">
          <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
          
        <nav>
          <Link className="btn btn-primary" to="/">Home Page</Link>
          <br />
          <Link to="/settings">Settings Page</Link>
          <br />
          <Link to="/someRouteThatDoesntExist">Doesnt exist Page</Link>
          <br />
          {
            projects.map((project) => {
              return (
                <div key={project.id}>
                  <br />
                  <Link to={`/projects/${project.id}`}>{project.description}</Link>
                </div>
              )
            })
          }
        </nav>
          
        <Switch>
          <Route exact path='/' render={() => (
              <GamePage
                  winTries={winTries}
                  colors={colors}
                  selColorIdx={this.state.selColorIdx}
                  guesses={this.state.guesses}
                  handleColorSelection={this.handleColorSelection}
                  handleNewGameClick={this.handleNewGameClick}
                  handlePegClick={this.handlePegClick}
                  handleScoreClick={this.handleScoreClick}
                />
            
            )} 
          />

          <Route path='/settings/:settingsID' render={(props) => {
            console.log(props)
            return <Settings id={props.match.params.settingsID} />
          }} />

          <Route path='/projects/:projId' render={(props) => {
            console.log(props)
            return <div> This is project {props.match.params.projId} </div>
          }} />


          <Route render={() => (
            <h3> Wasn't able to find this route </h3>
          )}/>
        </Switch>
        
        </div>
    );
  }
}

export default App;
