import React, {Component} from 'react';
import './App.css';
// Must import components used in the JSX
import MenuList from './components/MenuList/MenuList';
import DetailList from './components/OrderDetail/OrderDetail';
import Logo from './components/Logo/Logo';
import CategoryList from './components/CategoryList/CategoryList';
import UserLogOut  from './components/UserLogOut/UserLogOut'
import OrderDetail from './components/OrderDetail/OrderDetail';

class App extends Component {

  generateOrderNumber() {
    return Math.floor(Math.random() * 1000)
  }

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

      <DetailList className="OrderDetail" welcomeText="Hungry?!" orderNumber={this.generateOrderNumber} todaysDate={new Date().toLocaleDateString().toString()} />
    </div>
      )
  }
}

export default App;
