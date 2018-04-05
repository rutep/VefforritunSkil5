import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

export default class Home extends Component {

  render() {
    const { data, loading, error } = this.props;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    const result = data.stats;

    return (
      <div class="box">
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
