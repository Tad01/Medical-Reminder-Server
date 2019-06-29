import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.scss';

import Header from '../+layout/header/header'; 
import SideBar from '../+layout/sidebar/sidebar';
import Home from '../pages/home/home';
import PatientDetail from '../pages/patient-detail/patient-detail';
// import AIMLManager from '../pages/AI-ML-Manager/AIMLManager';
// import GardenManager from '../pages/Garden-Manager/Garden-Manager';
import Connection from '../../connection';
import About from '../pages/about/about';
import ManagerPatients from '../pages/manager-patients/manager-patients';


class App extends Component {
  constructor() {
    super();
    Connection.setup();
  }
  
  componentWillMount() {
    document.title = '💝 Health';
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <div> <Route path="/" exact component={Home} /> </div> */}
        <div id="body" className="d-flex">
          {window.location.pathname === '/' || window.location.pathname === '/patient-detail' ? null : <SideBar />}
          <div id="content">
            <Route path="/" exact component={Home} /> 
            <Route path="/about" exact component={About} />
            <Route path="/manager-patients" exact component={ManagerPatients} />
            <Route path="/patient-detail" exact component={PatientDetail} />

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
