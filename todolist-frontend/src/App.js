import React from 'react';

import Header from './components/Header';
import Task from './components/Task';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <main>
          <Task/>
        </main>
      </div>
    )
  }
}


export default App;
