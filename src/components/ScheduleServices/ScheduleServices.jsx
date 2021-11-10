import React, { Component } from 'react';
import mapStoreToProps from "../../redux/mapStoreToProps";
import './ScheduleServices.css';
import Button from '@material-ui/core/Button'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class OrderOnline extends Component {
    state = {
        postal: '',
        email: '',
    }

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    handleClick = () => {
        console.log("we clicking stuff", this.state.postal);
        this.props.dispatch({
            type: 'POST_CONTACT',
            payload: this.state
        });
        this.props.history.push('/property-type')

    }

    render() {
        return (
            <>
                <div className="grid">
                    <div className="grid-col grid-col_8" align="center">
                        <div>
                            <h2></h2>
                            <label htmlmFor="postal">
                                <h2>What is your postal code?</h2>
                                <input
                                    type="number"
                                    postal="postal"
                                    value={this.state.postal}
                                    required
                                    onChange={this.handleInputChangeFor('postal')}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <h2>What is your email address?</h2>
                                <input 
                                type="text"
                                email="email"
                                value={this.state.email}
                                required
                                onChange={this.handleInputChangeFor('email')}
                                />
                            </label>
                        </div>
                        <div>
                            <div align="right">
                            <Button
                            primary
                            variant="contained"
                            onClick={this.handleClick}
                            >
                            Next
                            </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);