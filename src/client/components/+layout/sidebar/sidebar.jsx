import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.links = [
      { type: 'url', url: '/about', text: 'Thông Tin Cá Nhân' },
      { type: 'url', url: '/manager-patients', text: 'Quản lý bệnh nhân' },
      { type: 'url', url: '/', text: 'Đăng xuất' },
      { type: 'url', url: '/', text: 'Đăng nhập' }
    ];
    this.state = {
      avatar: ''
    };

    window.setDoctorAvatar = (avatar) => this.setState({
      avatar
    });
  }

  render() {
    return (
      <React.Fragment>

        <aside className="d-flex flex-column modern-scrollbar text-center">
          <div className="row text-center">
            <div className="aqua-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half avatar text-center">
              <img src={this.state.avatar} alt="" className="img" /> <br />
            </div>

          </div>
          {
            this.links.map(link => {
              if (link.type === 'url')
                return (
                  <NavLink
                    to={link.url}
                    key={link.text}
                    exact
                    activeClassName='active'
                  >{link.text}
                  </NavLink>
                );
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
