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
              <nav className="navbar navbar-expand-lg navbar-dark  lighten-3 mb-4">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="form-inline mr-auto">
                    <div className="md-form my-0">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                      <i className="fas fa-search text-white ml-3" aria-hidden="true" />
                    </div>
                  </form>
                </div>
                <a className="navbar-brand" href="/dsfd">Thêm bệnh nhân</a>
              </nav>
              <h5>DANH SÁCH BỆNH NHÂN</h5>
              {/* hiển thị danh sách bệnh nhân */}

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />                 
                </div>
                <div className="col-md-4 mb-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />   
                </div>
                <div className="col-md-4 mb-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />    
                </div>
                <div className="col-md-4 mb-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />
                </div>
                <div className="col-md-4">
                  <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avarta" />
                </div>
              </div>
              <nav aria-label="Page navigation example ">
                <ul className="pagination justify-content-center ">
                  <li className="page-item disabled page">
                    <a className="page-link" href="/#" tabIndex="-1">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="/#">1</a></li>
                  <li className="page-item"><a className="page-link" href="/#">2</a></li>
                  <li className="page-item"><a className="page-link" href="/#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="/#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
