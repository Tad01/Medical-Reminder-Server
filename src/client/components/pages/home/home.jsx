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
        <div className="d-flex justify-content-center align-items-center w-100 h-100 ">
          <form className="text-center border border-dark p-5">
            <p className="h4 mb-4">Sign in</p>
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
            <div className="d-flex justify-content-around">
              <div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                  <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>
                <a href="/#">Forgot password?</a>
              </div>
            </div>
            <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
            <p>Not a member?
              <a href="/#">Register</a>
            </p>
            <p>or sign in with:</p>
            <button type="button" className="light-blue-text mx-2">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="light-blue-text mx-2">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="light-blue-text mx-2">
              <i className="fab fa-linkedin-in" />
            </button>
            <button type="button" className="light-blue-text mx-2">
              <i className="fab fa-github" />
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
