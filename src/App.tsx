import React from 'react';
import '@src/App.scss';
import { Button } from '@material-ui/core';
import { CounterContainer } from "./pages/counter_container/counter_container";

function App() {
  return (
    
    <div className="App">
      <header className="App-header">   
        <Button variant="contained">default1</Button>
        <Button variant="contained">default2</Button>
        <Button variant="contained">default3</Button>
        <Button variant="contained">default4</Button>
      </header>
      <main>
        <CounterContainer />
      </main>
    </div>
  );
}

export default App;
