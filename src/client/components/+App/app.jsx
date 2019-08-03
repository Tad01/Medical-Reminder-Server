import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import BlockUi from 'react-block-ui';
import './app.scss';

import Header from '../+layout/header/header'; 
import SideBar from '../+layout/sidebar/sidebar';
import Home from '../pages/home/home';
import PatientDetail from '../pages/patient-detail/patient-detail';
import About from '../pages/about/about';
import ManagerPatients from '../pages/manager-patients/manager-patients';
import PrescriptionDetail from '../pages/prescription-detail/prescription-detail';
import Patientform from '../pages/patient-form/patient-form';
import PrescriptionForm from '../pages/prescription-form/prescription-form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blocking: false
    };
    this.toggleBlocking = this.toggleBlocking.bind(this);
    window.toggleBlocking = () => this.toggleBlocking();
  }

  toggleBlocking() {
    this.setState(prevState => ({ blocking: !prevState.blocking }));
  }
  
  componentWillMount() {
    document.title = '💝 Health';
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <div> <Route path="/" exact component={Home} /> </div> */}
        <div id="body" className="d-flex" blocking={`${this.state.blocking}`}>
          {window.location.pathname === '/'
            || window.location.pathname.startsWith('/patient-detail')
            || window.location.pathname.startsWith('/prescription-detail')
            || window.location.pathname === '/patient-form'
            || window.location.pathname.startsWith('/prescription-form')  ? null : <SideBar />}
          <div id="content">
            <Route path="/" exact component={Home} /> 
            <Route path="/about" exact component={About} />
            <Route path="/manager-patients" exact component={ManagerPatients} />
            <Route path="/patient-detail/:patientId" exact component={PatientDetail} />
            <Route path="/prescription-detail/:prescriptionId" exact component={PrescriptionDetail} />
            <Route path="/prescription-form/:patientId" exact component={PrescriptionForm} />
            <Route path="/patient-form" exact component={Patientform} />

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
