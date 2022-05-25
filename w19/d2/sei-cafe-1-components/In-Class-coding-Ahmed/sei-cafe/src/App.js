import React, {Component} from 'react';
import './App.css';
// Must import components used in the JSX
import MenuList from './components/MenuList/MenuList';
import DetailList from './components/OrderDetail/OrderDetail';
import Logo from './components/Logo/Logo';
import CategoryList from './components/CategoryList/CategoryList';
import UserLogOut  from './components/UserLogOut/UserLogOut'

class App extends Component {

  render(){
  return(
    <div className='App'>
      <header className='App-header'>SEI-Cafe</header>
      <nav className='component'>
      nav
      <Logo />
      <CategoryList  />
      <UserLogOut/>
      </nav>

      <MenuList />
      <DetailList />
    </div>
      )
  }
}

export default App;
