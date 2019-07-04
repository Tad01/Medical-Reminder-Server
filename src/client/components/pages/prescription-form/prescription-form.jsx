/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './prescription-form.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'Đơn thuốc';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <form className="pres-form">
          <h4>THÊM ĐƠN THUỐC</h4>
          <table className="tb-medicine">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" lassName="col-sm-2 col-form-label  col-form-label-sm">Chẩn đoán:  </label>
                </td>
                <td>
                  <div>
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="tên chẩn đoán..." />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" lassName="col-sm-2 col-form-label  col-form-label-sm">Mã đơn thuốc:   </label>
                </td>
                <td>
                  <div>
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="vd: DT001T2019" />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" lassName="col-sm-2 col-form-label  col-form-label-sm">Bác sĩ: </label>
                </td>
                <td>
                  <div>
                    <select className="form-control form-control-sm">
                      <option>Danh sách Bác sĩ</option>
                    </select>
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" lassName="col-sm-2 col-form-label  col-form-label-sm">Bệnh nhân: </label>
                </td>
                <td>
                  <div>
                    <select className="form-control form-control-sm">
                      <option>Danh sách bệnh nhân</option>
                    </select>
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <label htmlFor="colFormLabelSm" lassName="col-sm-2 col-form-label  col-form-label-sm">Thuốc: </label>
                </td>
                <td>
                  <div>
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="tên thuốc..." />
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm" type="submit">Thêm thuốc</button>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <div>
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Số lượng..." />
                  </div>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <div>
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="hình ảnh..." />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary btnpres " type="submit">Thêm đơn thuốc</button>
        </form>
          
      </React.Fragment>
    );
  }
}
