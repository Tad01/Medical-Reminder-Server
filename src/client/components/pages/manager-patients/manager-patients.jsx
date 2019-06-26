/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './manager-patients.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'About';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div> Đây là trang Quản lý bệnh nhân</div>
      </React.Fragment>
    );
  }
}
