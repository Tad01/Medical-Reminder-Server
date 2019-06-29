/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './about.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'About';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        
        <div className="container-about">
          <div className="border-title">
            <div className="section-title">
              <div>THÔNG TIN CÁ NHÂN</div>
            </div> 
          </div>
          <div className="table">
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
                Email: 
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
               Chuyên khoa: 
              </div>
              <div className="col-sm" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
