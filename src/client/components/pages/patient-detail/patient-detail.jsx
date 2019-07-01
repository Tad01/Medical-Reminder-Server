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
              <table classNAme="table table-sm">
                <tbody>
                  <tr>
                    <th>
                      {/* <div className="mb-7"> */}
                      <div className="blue-gradient color-block mb-3 mx-auto rounded-circle z-depth-1 patient-avarta" /> 
                      {/* </div> */}
                    </th>
                    <td>
                      <table className="table table-sm table1">
                        <tbody>
                          <tr>
                            <td>Họ và tên : </td>
                            <td>Nguyễn Đình Minh Tú</td>
                          </tr>
                          <tr>
                            <td>Ngày sinh : </td>
                            <td />
                          </tr>
                          <tr>
                            <td>SĐT :</td>
                            <td />
                          </tr>
                          <tr>
                            <td>Địa chỉ :</td>
                            <td />
                          </tr>
                          <tr>
                            <td>Chẩn đoán :</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Thêm đơn thuốc</button>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Chỉnh sửa thông tin</button>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Xóa bệnh nhân</button>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="box2">
            <div className="patient-pres">
            
              <table className="table-sm table-pres">
                <tbody>
                  <tr>
                    <th>tên chẩn đón</th>
                    <th>tên chẩn đón</th>
                    <th>tên chẩn đón</th>
                                                        
                  </tr>
                  <tr>
                    <th> <img src="https://image.flaticon.com/icons/svg/172/172813.svg" alt="" className="imgpres "  /></th>
                    <th> <img src="https://image.flaticon.com/icons/svg/172/172813.svg" alt="" className="imgpres" /></th>
                    <th> <img src="https://image.flaticon.com/icons/svg/172/172813.svg" alt="" className="imgpres" /></th>

                  </tr>
                  <tr>
                    <th>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Xem chi tiết</button>
                    </th> 
                    <th>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Xem chi tiết</button>
                    </th> 
                    <th>
                      <button className="btn btn-info btn-block my-4 btn1" type="submit">Xem chi tiết</button>
                    </th> 
                  </tr>
              
                </tbody>
              </table>
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
