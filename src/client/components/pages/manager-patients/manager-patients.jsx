/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './manager-patients.scss';
import superagent from 'superagent';
 
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
    this.endPoint = '/api/patients/list';
  }

  componentDidMount() {
    document.title = 'About';
    this.fetchPatients();
  }

  fetchPatients() {
    superagent.get(`${this.endPoint}`)
      .then(res => this.onPatientsResult(res));
  }

  onPatientsResult(res) {
    if (!res.body || !res.body.patients) {
      return;
      // xử lý lỗi
    }
    this.setState({
      patients: res.body.patients
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-managerpatients">
          <div className="box">
            <div className="manager-patients d-flex flex-column">
              <div>
                <nav className="navbar navbar-expand-lg navbar-dark  lighten-3 mb-4">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline mr-auto">
                      <div className="md-form my-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        <i className="fas fa-search text-white ml-3" aria-hidden="true" />
                      </div>
                    </form>
                  </div>
                  <a className="navbar-brand" href="/patient-form">Thêm bệnh nhân</a>
                </nav>
                <div>
                  <h5>DANH SÁCH BỆNH NHÂN</h5>
                </div>
              </div>
              <div className="d-flex flex-fill overflow-hidden">
                <div className="flex-fill overflow-auto d-flex flex-wrap ">
                  {this.state.patients.map(patient => (
                    <div className="col-md-4 mb-4 text-center">
                      <a href={`/patient-detail/${patient.id}`}>
                        <div className="cloudy-knoxville-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avatar">
                          <img src={patient.avatar} alt="" />
                        </div>
                      </a>
                      <div>
                        <a href={`/patient-detail/${patient.id}`}>
                          {patient.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
