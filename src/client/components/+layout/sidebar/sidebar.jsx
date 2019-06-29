import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.links = [
      // /{ type: 'url', url: '/', text: 'Trang Chủ' },
      // { type: 'url', url: '/AI-ML-Manager', text: 'Quản Lý AI/ML (Admin)' },
      // { type: 'url', url: '/user-map', text: 'Mạng Lưới Người dùng' },
      // { type: 'url', url: '/my-garden', text: 'Quản Lý Vườn' },
      // { type: 'sepa rator' }
      { type: 'url', url: '/about', text: 'Thông Tin Cá Nhân' },
      { type: 'url', url: '/manager-patients', text: 'Quản lý bệnh nhân' },
      { type: 'url', url: '/', text: 'Đăng xuất' }
    ];
  }

  render() {
    return (
      <React.Fragment>

        <aside className="d-flex flex-column modern-scrollbar">
          <div className="row ">
            <div className="col-md-4">
              <div className="aqua-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half  avarta">
                
                {/* <img src="https://image.flaticon.com/icons/svg/921/921130.svg" alt="" className="img" /> */}
              </div>
              <h6>Doctor</h6>
            </div>
          </div>
          {
            this.links.map(link => {
              if (link.type === 'url')
                return <NavLink to={link.url} key={link.url} exact activeClassName='active'>{link.text}</NavLink>;
              if (link.type === 'separator')
                return <hr key="Z" />;
              return null;
            })
          }
        </aside>
      </React.Fragment>
    );
  }


}
