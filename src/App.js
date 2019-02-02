import React from 'react';
import logo from './logo.svg';
import './App.css';
import ManageItems from './ManageItems'
import ItemList from './ItemList'

class App extends React.Component {
  state = {
    items: []
  }
  addItem = (value) => {
    this.setState(prevState => ({
      items: [...prevState.items, value]
    }))
  }
  deleteLastItem = () => {
    this.setState(prevState => {
      prevState.items.pop()
      return ({items: prevState.items})
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ManageItems addItem={this.addItem} deleteLastItem={this.deleteLastItem} deleteDisabled={this.state.items.length <= 0} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
