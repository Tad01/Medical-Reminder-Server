/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './styles.scss';
import superagent from 'superagent';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'tandatit19@gmail.com',
      password: 'tandat19'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.endPoint = '/api/users/login';
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.toggleBlocking();
    superagent.post(this.endPoint)
      .send({
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        window.toggleBlocking();
        this.onLoginResult(res);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  onLoginResult(res) {
    if (res.body.ok) {
      // chuyển hướng sang home
      window.location.href = '/about';
    }
  }

  componentDidMount() {
    document.title = 'Home';
  }

  componentWillUnmount() {

  }
 
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center w-100 h-100 ">
          <form className="text-center border border-dark p-5" onSubmit={this.handleSubmit}>
            <p className="h4 mb-4">Sign in</p>
            <input
              type="email"
              name="email"
              className="form-control mb-4"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control mb-4" 
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
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
