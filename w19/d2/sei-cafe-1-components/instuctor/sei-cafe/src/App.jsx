import React, { Component } from 'react'
// Styles
import './App.css';

// Components
import MenuList from './components/MenuList/MenuList';
import OrderDetail from './components/OrderDetail/OrderDetail';



// we use the this keyuord to reference anything inside the class instance
class App extends Component {


  render(){
    return (
      <div className="App component">
        <header className="App-header">SEI-Cafe</header>
        <MenuList/>
        <OrderDetail/>
      </div>
    );
  }
}



// OLD SYNTAX
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">SEI-Cafe</header>
//     </div>
//   );
// }

export default App;
