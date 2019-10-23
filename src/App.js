import React, { Component } from 'react';
import List from './components/List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     lists: STORE.lists,
     allCards: STORE.allCards
    }
  }

  handleDeleteCard = (cardId) => {
    console.log('handle delete Card called')
  }

  handleAddRandomCard = () => {
    console.log('add random card called')
  }

  render() {

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App;
