import React from 'react';

import Header from './components/Header';
import Task from './components/Task';
import TaskList from './components/TaskList';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <main>
          <TaskList/>
        </main>
      </div>
    )
  }
}


export default App;
