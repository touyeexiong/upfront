import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu';
import mapStoreToProps from "../../redux/mapStoreToProps";
import Grid from '@material-ui/core/Grid';
import './ScheduleServices.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OrderOnline extends Component {
    state = {
        postal: '',
        email: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

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
                            <Link
                            to="">
                            
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);