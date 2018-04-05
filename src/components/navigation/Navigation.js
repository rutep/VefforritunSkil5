import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Navigation.css';
import { /* Route, */ Link /*, Switch */ } from 'react-router-dom'
// import Department from '../department';
/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */


function handleClic(){
  window.location.reload();
}

export default class Navigation extends Component {

  render() {
    const { data, loading, error } = this.props;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    const result = data.schools;

    return (
      <div class="box">
        <div class="links">
          {result.map((item, i) => (
            <Link onClick={handleClic} to={item.slug}> {item.name} </Link>
          ))}
        </div>
      </div>
    );
  }
}


