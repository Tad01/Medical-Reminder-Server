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
              <table class="table table-sm">
                <tbody>
                  <tr>
                    <td>Họ và tên : </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ngày sinh : </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SĐT :</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Địa chỉ :</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Chẩn đoán :</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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
