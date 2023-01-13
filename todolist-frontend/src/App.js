import React from 'react';

import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  )
}


export default App;
