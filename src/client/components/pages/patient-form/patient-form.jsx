/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './patient-form.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'Đơn thuốc';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div id="form">
          <form>
            <h4>THÊM BỆNH NHÂN</h4>
            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Họ và tên: </label>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="tên..." />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Ngày sinh: </label>
              <div className="col-sm-10">
                <input type="date" className="form-control form-control-sm" id="colFormLabelSm" />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Giới tính: </legend>
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                    Nam
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                    Nữ
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Mã bệnh nhân</label>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="mã bệnh nhân..." />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Điện thoại: </label>
              <div className="col-sm-10">
                <input type="phone" className="form-control form-control-sm" id="colFormLabelSm" placeholder="SĐT..." />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Địa chỉ:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Địa chỉ..." />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Hình ảnh:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="..." />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Tên tài khoản:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="vd: pat00188" />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label  col-form-label-sm">Mật khẩu:</label>
              <div className="col-sm-10">
                <input type="password" className="form-control form-control-sm" id="colFormLabelSm"  />
              </div>
            </div>
            <button className="btn btn-primary btn-pat" type="submit">Thêm bệnh nhân</button>
          </form>

        </div>
      </React.Fragment>
    );
  }
}
