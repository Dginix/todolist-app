import React from 'react';

import Header from './components/Header';
import TaskList from './components/TaskList';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <TaskList/>
      </div>
    )
  }
}


export default App;
