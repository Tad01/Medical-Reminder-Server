/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './prescription-detail.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'Đơn thuốc';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="pres-detail">
          <table className="table-sm table-1">
            <tbody>
              <tr>
                <td className="w-75">Mã đơn thuốc:  </td>
                <td className="">Ngày:18-02-2019 </td>
              </tr>

            </tbody>
          </table>
          <h4>ĐƠN THUỐC</h4>
          <table className="table-sm table-2">
            <tbody>
              <tr>
                <td>Họ và Tên:</td>
                <td> Nguyễn Đình Minh Tú </td>
                <td />
                <td> Giới tính: </td>
                <td />
              </tr>
              <tr>
                <td>SĐT:  </td>
                <td />
                <td />
                <td>Ngày sinh:  </td>
                <td />
              </tr>
              <tr>
                <td>Địa chỉ: </td>
                <td />
                <td />
                <td>Chẩn đoán: </td>
                <td />
              </tr>
            </tbody>
          </table>

          <table className=" table-sm table-3">
            <tbody>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên thuốc</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Hình ảnh</th>

              </tr>
              <tr>
                <td scole="col">1</td>
                <td>Thuốc 1 ( description) </td>
                <td>30 viên</td>
                <td><img src="https://image.flaticon.com/icons/png/128/822/822143.png" alt="" /> </td>
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
              </tr>

            </tbody>
          </table>
        </div>
        <div className="prebtn">
          <a href="/prescription-form">
            <button className="btn btn-info btn-block my-4 btn1" type="submit">Thêm đơn thuốc </button>
          </a>
          <button className="btn btn-info btn-block my-4 btn1" type="submit">Chỉnh sửa đơn thuốc </button>
          <button className="btn btn-info btn-block my-4 btn1" type="submit">Xóa đơn thuốc </button>
        </div>
      </React.Fragment>
    );
  }
}
