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

    }

    render() {
        return (
            <>
                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <div>
                            <label htmlmFor="postal">
                                What is your postal code?
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
                                What is your email address?
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
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);