/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './styles.scss';

export default class extends Component {
  componentDidMount() {
    document.title = 'Home';
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <div className="form-header default-color">
              <h3><i className="fas fa-lock" /> Login:</h3>
            </div>
            <div className="md-form">
              <i className="fas fa-envelope prefix grey-text" />
              <input type="text" id="defaultForm-email" className="form-control" />
              <label htmlFor="defaultForm-email" className="">Your email</label>
            </div>

            <div className="md-form">
              <i className="fas fa-lock prefix grey-text" />
              <input type="password" id="defaultForm-pass" className="form-control" />
              <label htmlFor="defaultForm-pass" className="">Your password</label>
            </div>

            <div className="text-center">
              <button type="button" className="btn btn-default waves-effect waves-light">Login</button>
            </div>

          </div>

          <div className="modal-footer">
            <div className="options">
              <p>Not a member?
                <button type="button">Sign Up</button>
              </p>
              <p>Forgot
                <button type="button">Password?</button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
