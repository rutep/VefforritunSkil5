import React, { Component } from 'react';
// import Helmet from 'react-helmet';
import { Route, Link /* , Switch */ } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
// import NotFound from './components/not-found';
import Department from './components/department';

class App extends Component {
  render() {

    return (
      <main className="app">
        <h1> <u> <Link to="/">  Próftöflur  </Link></u> </h1>
        <Navigation> </Navigation>
        <Route exact path='/' component={Home}/>
        <Route path='/:slug' component={Department}/>
        <Route path='/:slug' component={School}/>
      </main>
    );
  }
}

export default App;
