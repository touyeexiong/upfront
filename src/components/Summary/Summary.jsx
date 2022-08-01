import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Calendar from 'rc-calendar';
import '../ScheduleServices/ScheduleServices.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



class Summary extends Component {

    state = {
        startDate: '',
        returnDate: '',
        conflict: '',
    }

    componentDidMount() {

    }

    // need a function that compares startDate/returnDate against reservations
    // already made to check for conflicts

    handleClick = () => {
        this.props.history.push('/confirmation')
    }


    render() {

        return (
            <>

                <div className="grid">
                    <div className="grid-col grid-col_8" align="center">

                        <h2>Appointment Summary</h2>
                        <Paper>
                            <h3>Contact Information</h3>
                            <div>
                                <label htmlFor="email_address">
                                    Email Address: touyeexiong@gmail.com

                                </label>
                            </div>

                            <div>
                                <label htmlFor="first_name">
                                    First Name: Tou

                                </label>
                            </div>

                            <div>
                                <label htmlFor="last_name">
                                    Last Name: Xiong

                                </label>
                            </div>

                            <div>
                                <label htmlFor="address_1">
                                    Address 1: 3435 Promenade Ave

                                </label>
                            </div>

                            <div>
                                <label htmlFor="address_2">
                                    Address 2: Apt 104
                                </label>
                            </div>

                            <div>
                                <label htmlFor="city">
                                    City: Eagan
                                </label>
                            </div>
                            <div>
                                <label htmlFor="state">
                                    State: MN
                                </label>
                            </div>

                            <div>
                                <label htmlFor="zip">
                                    Zip Code: 55123
                                </label>
                            </div>

                            <div>
                                <label htmlFor="phone">
                                    Phone: 6513549476
                                </label>
                            </div>

                        </Paper>
                        <Paper>
                            <h3>Specific Cleaning Service Date</h3>
                            <p>Date: 7/25/2022</p>
                            <p>
                                Time Slot: 3PM to 5PM
                            </p>
                        </Paper>
                        <div>
                        <Paper>
                            <h3> Service Pricing Breakdown</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        </Paper>

                        </div>

                    </div>

                </div>
                <div align="right">
                    <Button
                        primary
                        variant="contained"
                        onClick={this.handleClick}
                    >
                        Submit
                    </Button>

                </div>



            </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Summary);