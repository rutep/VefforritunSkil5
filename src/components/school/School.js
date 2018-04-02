import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './School.css';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
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

    let result = data.school.departments;
    return (
      <div>
        {result.map((item, i) => (
          <h3> {item.heading} </h3>
        ))}
      </div>
    );
  }
}

export default class School extends Component {

  render() {
    const { match } = this.props;
    
    return (
      <section className="department">
        <Fetch url={'https://vefforritun2-2018-v4-synilausn.herokuapp.com'+match.url}> </Fetch>
      </section>
    );
  }
}


