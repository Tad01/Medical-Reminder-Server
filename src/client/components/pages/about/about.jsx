/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import superagent from 'superagent';
import './about.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: null
    };
    this.endPoint = '/api/doctors';
  }

  componentDidMount() {
    document.title = 'About';
    this.fetchDoctorData();
  }

  fetchDoctorData() {
    superagent.get(`${this.endPoint}`)
      .then(res => this.onDoctorResult(res));
  }

  onDoctorResult(res) {
    if (!res.body || !res.body.doctor) {
      return;
      // xử lý lỗi
    }
    this.setState({
      doctor: res.body.doctor
    });
    if (this.state.doctor && this.state.doctor.avatar) {
      window.setDoctorAvatar(this.state.doctor.avatar);
    }
  }

  render() {
    const { doctor } = this.state;
    return (
      <React.Fragment>
        <div className="container-about">
          <div className="border-title">
            <div className="section-title">
              <h5>THÔNG TIN CÁ NHÂN</h5>
            </div>
          </div>

          <div className="table">
            <div className="row">
              <div className="col-sm text-center">
                Họ và tên:
              </div>
              <div className="col-sm ">
                {doctor ? doctor.name : ''}
              </div>
            </div>
            <div className="row ">
              <div className="col-sm text-center">
                Ngày sinh:
              </div>
              <div className="col-sm">
                {doctor ? moment(doctor.birthday).format('DD/MM/YYYY') : ''}
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center">
                Điện thoại:
              </div>
              <div className="col-sm">
                {doctor ? doctor.phone : ''}
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center">
                Email:
              </div>
              <div className="col-sm">
                {doctor ? doctor.email : ''}
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center">
                Địa chỉ:
              </div>
              <div className="col-sm">
                {doctor ? doctor.address : ''}
              </div>
            </div>
            <div className="row">
              <div className="col-sm text-center">
                Chuyên khoa:
              </div>
              <div className="col-sm">
                {doctor ? doctor.specialist : ''}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
