/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import superagent from 'superagent';
import './patient-form.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      gender: true, 
      patientCode: '',
      phone: '', 
      address: '', 
      avatar: '', 
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.endPoint = '/api/patients';
  }

  componentDidMount() {
    document.title = 'Đơn thuốc';
  }

  handleInputChange(event) {
    const isRadioValue = event.target.value === 'true' || event.target.value === 'false';
    const radioValue = event.target.value === 'true';
    this.setState({
      [event.target.name]: isRadioValue ? radioValue : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.toggleBlocking();
    superagent.post(this.endPoint)
      .send(JSON.parse(JSON.stringify(this.state)))
      .then(res => {
        window.toggleBlocking();
        this.onCreateResult(res);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  onCreateResult(res) {
    if (res.body.ok) {
      // chuyển hướng sang home
      window.location.href = '/manager-patients';
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="form">
          <form onSubmit={this.handleSubmit}>
            <h4>THÊM BỆNH NHÂN</h4>
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Họ và tên: </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  name="name"
                  placeholder="tên..."
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="birthday" className="col-sm-2 col-form-label  col-form-label-sm">Ngày sinh: </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="birthday"
                  name="birthday"
                  value={this.state.birthday}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Giới tính: </legend>
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio" 
                      name="gender"
                      id="gender-male"
                      value
                      checked={this.state.gender === true}
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="gender-male">
                    Nam
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value={false}
                      checked={this.state.gender === false}
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="gender-female">
                    Nữ
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <label htmlFor="patientCode" className="col-sm-2 col-form-label  col-form-label-sm">Mã bệnh nhân</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="patientCode"
                  name="patientCode"
                  placeholder="mã bệnh nhân..."
                  value={this.state.patientCode}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="phone" className="col-sm-2 col-form-label  col-form-label-sm">Điện thoại: </label>
              <div className="col-sm-10">
                <input
                  type="phone"
                  className="form-control form-control-sm"
                  id="phone"
                  name="phone"
                  placeholder="SĐT..."
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="address" className="col-sm-2 col-form-label  col-form-label-sm">Địa chỉ:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="address"
                  name="address"
                  placeholder="Địa chỉ..."
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="avatar" className="col-sm-2 col-form-label  col-form-label-sm">Hình ảnh:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="avatar"
                  name="avatar"
                  placeholder="..."
                  value={this.state.avatar}
                  onChange={this.handleInputChange}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className="form-group row"> 
              <label htmlFor="password" className="col-sm-2 col-form-label  col-form-label-sm">Mật khẩu:</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <button className="btn btn-primary btn-pat" type="submit">Thêm bệnh nhân</button>
          </form>

        </div>
      </React.Fragment>
    );
  }
}
