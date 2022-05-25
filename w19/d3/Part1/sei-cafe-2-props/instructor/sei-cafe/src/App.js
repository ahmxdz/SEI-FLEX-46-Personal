import React, { Component } from 'react';
import './App.css';
import MenuList from './components/MenuList/MenuList';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Logo from './components/Logo/Logo';
import CategoryList from './components/CategoryList/CategoryList';
import UserLogOut from './components/UserLogOut/UserLogOut';

class App extends Component {
  generateOrderNumber() {
    return Math.floor(Math.random() * 1000)
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
            <Logo />
            <CategoryList />
            <UserLogOut className='UserLogOut' />
        </nav>
        <MenuList />
        <OrderDetail welcomeText='Hungry?!' orderNumber="7" today='March 5, 2022' generateOrderNumber={this.generateOrderNumber} />
      </div>
    );
  }
}

export default App;