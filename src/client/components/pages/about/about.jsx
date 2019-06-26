/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './about.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'About';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div> Đây là trang About</div>
      </React.Fragment>
    );
  }
}
