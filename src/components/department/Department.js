import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import withFetch from '../../withFetch';
import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */


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

    let result = data.school.heading;

    return (
      <div>
        <h2> {result} </h2>
      </div>
    );
  }
}




export default class Exams extends Component {

  render() {
    const { match } = this.props;
    
    return (
      <section className="department">
      <Fetch url={'https://vefforritun2-2018-v4-synilausn.herokuapp.com'+match.url}> </Fetch>
      </section>
    );
  }
}

