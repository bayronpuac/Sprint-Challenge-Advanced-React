import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <>
    <nav className="navbar">
     <h1>Player List</h1>
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>  
    </nav>
    <div>
      <PlayerList />
    </div>
    </>
  );

};




export default App;
