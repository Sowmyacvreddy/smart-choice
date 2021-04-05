import React from 'react';
import './default.scss';
import Header from './component/Header/index';
import HomePage from './pages/HomePage/index';
import Registration from './pages/Registration';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Route exact path ="/" component={HomePage} />
        <Route exact path ="/registration" component={Registration} />
      </div>  
    </div>
  );
}

export default App;
