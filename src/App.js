import React from 'react';
import './default.scss';
import Header from './component/Header/index';
import HomePage from './pages/HomePage/index';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage />
      </div>  
    </div>
  );
}

export default App;
