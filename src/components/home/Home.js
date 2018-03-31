import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

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

    let result = data.stats;
  

    return (
      <div>
        <h2>
          Tölvfræði
        </h2>
        <table>
          <tr>
            <td> <b> Fjöldi prófa </b> </td>
            <td> {result.numTests} </td>            
          </tr>
          <tr>
            <td> <b> Fhjöldi nemanda í prófi </b> </td>
            <td> {result.numStudents} </td>            
          </tr>
          <tr>
            <td> <b> Meðalfjöldi nemanda í prófi </b> </td>
            <td> {result.averageStudents} </td>            
          </tr>
          <tr>
            <td> <b> Minnsti fjöldi nemanda í prófi </b> </td>
            <td> {result.min} </td>            
          </tr>
          <tr>
            <td> <b> Mesti fjöldi nemanda í prófi </b></td>
            <td> {result.max} </td>            
          </tr>
        </table>
      </div>
      
    );
  }
}

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Fetch url='https://vefforritun2-2018-v4-synilausn.herokuapp.com/stats'/>
      </div>
    );
  }
}
