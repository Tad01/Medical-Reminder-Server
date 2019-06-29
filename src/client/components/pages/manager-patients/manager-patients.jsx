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
        <div className="container-managerpatients">
          <div className="box">
            <div className="manager-patients">
              {/* <div className="control">
                <button type="button" className="btn btn-light">Thêm bệnh nhân</button> <br />
              </div> */}
              <nav className="navbar navbar-expand-lg navbar-dark blue lighten-3 mb-4">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="form-inline mr-auto">
                    <div className="md-form my-0">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                      <i className="fas fa-search text-white ml-3" aria-hidden="true" />
                    </div>
                  </form>
                </div>
                <a className="navbar-brand" href="/dsnfbd">Thêm bệnh nhân</a>
              </nav>
              <h1>DANH SÁCH BỆNH NHÂN</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
