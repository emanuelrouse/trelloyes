import React from 'react';
import Lists from './components/List'

function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>

      <div className="app-list">
        <Lists lists={props.store.lists} cards={props.store.allCards} />
      </div>
    </main>
  );
}

export default App;
