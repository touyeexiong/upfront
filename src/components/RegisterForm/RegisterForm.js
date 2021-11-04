import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class RegisterForm extends Component {
  state = {
    name: '',
    email_address: '',
    username: '',
    password: '',
    access_level: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        name: this.state.name,
        email_address: this.state.email_address,
        username: this.state.username,
        password: this.state.password,
        access_level: this.state.access_level
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}

        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleInputChangeFor('name')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email_address">
            Email Address:
            <input
              type="text"
              name="email address"
              value={this.state.email_address}
              required
              onChange={this.handleInputChangeFor('email_address')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
