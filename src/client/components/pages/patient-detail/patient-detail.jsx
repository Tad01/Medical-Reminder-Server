/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './patient-detail.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'Thông tin';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="boxpatient">
          <div className="box1">
            <div className="patient-detail">
              <div className="table1">
                <div className="row">
                  <div className="col-sm">
                    Họ và tên:
                  </div>
                  <div className="col-sm" />
                </div>
                <div className="row">
                  <div className="col-sm">
                    Ngày sinh:
                  </div>
                  <div className="col-sm" />
                </div>
                <div className="row">
                  <div className="col-sm">
                    SĐT:
                  </div>
                  <div className="col-sm" />
                </div>
                <div className="row">
                  <div className="col-sm">
                    Địa chỉ:
                  </div>
                  <div className="col-sm" />
                </div>
                <div className="row">
                  <div className="col-sm">
                    Chẩn đoán: 
                  </div>
                  <div className="col-sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="patient-pres">
                danh sách đơn thuốc
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
