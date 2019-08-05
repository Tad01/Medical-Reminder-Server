/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import superagent from 'superagent';
import moment from 'moment';
import './patient-detail.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: null
    };
    this.endPoint = '/api/patients';
  }

  componentDidMount() {
    document.title = 'Thông tin';
    const { patientId } = this.props.match.params;
    this.fetchPatientData(patientId);
  }

  fetchPatientData(patientId) {
    superagent.get(`${this.endPoint}/${patientId}`)
      .then(res => this.onPatientResult(res));
  }

  onPatientResult(res) {
    if (!res.body || !res.body.patient) {
      return;
      // xử lý lỗi
    }
    this.setState({
      patient: res.body.patient
    });
  }

  render() {
    const { patient } = this.state;
    return (
      <React.Fragment>
        <div className="boxpatient">
          <div className="box1">
            <div className="patient-detail d-flex flex-column">
              <table className="table table-sm w-100">
                <tbody>
                  <tr>
                    <th>
                      <div className="blue-gradient color-block mb-3 mx-auto rounded-circle z-depth-1 patient-avatar">
                        <img src={patient ? patient.avatar : ''} alt="" />
                      </div>
                    </th>
                    <td>
                      <table className="table table-sm table1">
                        <tbody>
                          <tr>
                            <td>Họ và tên : </td>
                            <td>{patient ? patient.name : ''}</td>
                          </tr>
                          <tr>
                            <td>Ngày sinh : </td>
                            <td>{patient ? moment(patient.birthday).format('DD/MM/YYYY') : ''}</td>
                          </tr>
                          <tr>
                            <td>Giới tính : </td>
                            <td>{patient ? (patient.gender ? 'Nam' : 'Nữ') : ''}</td>
                          </tr>
                          <tr>
                            <td>SĐT :</td>
                            <td>{patient ? patient.phone : ''}</td>
                          </tr>
                          <tr>
                            <td>Địa chỉ :</td>
                            <td>{patient ? patient.address : ''}</td>
                          </tr>
                          <tr>
                            <td>Mã bệnh nhân :</td>
                            <td>{patient ? patient.patient_code : ''}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <a href={`/prescription-form/${patient ? patient.id : ''}`}>
                        <button className="btn btn-info btn-block my-4 btn1" type="submit">Thêm đơn thuốc</button>
                      </a>
                      <a href="/patient-form">
                        <button className="btn btn-info btn-block my-4 btn1" type="submit">Chỉnh sửa thông tin </button>
                      </a>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Xóa bệnh nhân</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>DANH SÁCH ĐƠN THUỐC</h4>
            </div>
            <div className="d-flex flex-fill overflow-hidden">
              <div className="flex-fill overflow-auto d-flex flex-wrap">
                {patient ? patient.prescriptions.map(pre => (
                  <div className="col-md-4 mb-4 text-center">
                    <div>{pre.diagnose}</div>
                    <div>
                      <img src="https://image.flaticon.com/icons/svg/172/172813.svg" alt="" className="imgpres " />
                    </div>
                    <div>
                      <a
                        className="btn btn-info btn-block my-4 btn1 w-100 text-center"
                        href={`/prescription-detail/${pre.id}`}
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                )) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
