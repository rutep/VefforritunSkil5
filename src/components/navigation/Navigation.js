import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom'

import './Navigation.css';
import Home from '../home'
import School from '../school';

require('isomorphic-fetch');

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */


class Fetch extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const { url } = this.props;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    let result = data.schools;
    

    return (
      <div>
        <div class="links">
          {result.map((item, i) => (
            <Link to={item.slug}> {item.name} </Link> 
          ))}

          <Switch>
            {result.map((item, i) => (
            <Route exact path={"/:slug"} component={item.slug}/> 
            ))}
          </Switch>
        </div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <h1> <u> <Link to="/">  Próftöflur  </Link></u> </h1>
        <Fetch url='https://vefforritun2-2018-v4-synilausn.herokuapp.com/'/>
      </div>
    );
  }
}

