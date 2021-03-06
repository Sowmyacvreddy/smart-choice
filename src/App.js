import React from 'react';
import './default.scss';
import Header from './component/Header/index';
import HomePage from './pages/HomePage/index';
import Registration from './pages/Registration';
import {Route,Switch} from 'react-router-dom';
import Footer from './component/Footer/index'
import About from './pages/About/index';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path ="/" component={HomePage} />
          <Route path ="/registration" component={Registration} />
          <Route path ="/about" component={About} />
        </Switch>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
