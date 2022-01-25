import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Contact extends Component {
  state = {
    email_address: '',
    first_name: '',
    last_name: '',
    address_1: '',
    address_2: '',
    access_level: '',
    city: '',
    zip: '',
    phone: '',

  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        email_address: this.state.email_address,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        address_1: this.state.address_1,
        address_2: this.state.address_2,
        city: this.state.city,
        zip: this.state.zip,
        phone: this.state.phone,
        access_level: this.state.access_level
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleClick = () => {
    this.props.history.push('booking')
  }

  render() {
    console.log(this.state);
    
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Schedule and Appointment</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}

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
          <label htmlFor="first_name">
            First Name:
            <input
              type="text"
              name="first_name"
              value={this.state.first_name}
              required
              onChange={this.handleInputChangeFor('first_name')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="last_name">
            Last Name:
            <input
              type="text"
              name="last_name"
              value={this.state.last_name}
              required
              onChange={this.handleInputChangeFor('last_name')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="address_1">
            Address 1:
            <input
              type="text"
              name="address_1"
              value={this.state.address_1}
              required
              onChange={this.handleInputChangeFor('address_1')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="address_2">
            Address 2:
            <input
              type="text"
              name="address_2"
              value={this.state.address_2}
              required
              onChange={this.handleInputChangeFor('address_2')}
            />
          </label>
        </div>
        
        <div>
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              required
              onChange={this.handleInputChangeFor('city')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="state">
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              required
              onChange={this.handleInputChangeFor('state')}
            />
          </label>
        </div>
        <div>

        <div>
          <label htmlFor="zip">
            Zip Code:
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              required
              onChange={this.handleInputChangeFor('zip')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="phone">
            Phone:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              required
              onChange={this.handleInputChangeFor('phone')}
            />
          </label>
        </div>
          <input className="btn" type="submit" name="submit" value="Register" onClick={this.handleClick}/>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(Contact);
