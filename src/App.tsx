import React, { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import DarkModeProvider from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState('all');
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      ></Header>
      <TodoList filter={filter}></TodoList>
    </DarkModeProvider>
  );
}

export default App;
