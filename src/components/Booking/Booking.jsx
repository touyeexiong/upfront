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



class Booking extends Component {

    state = {
        startDate: '',
        returnDate: '',
        conflict: '',
    }

    componentDidMount() {

        this.handleReservation();
        this.props.dispatch({
            type: 'FETCH_RVS'
        })
    }

    // need a function that compares startDate/returnDate against reservations
    // already made to check for conflicts

    handleDateChangeFor = dateSelections => (event) => {
        let rv = this.props.reduxState.reservationByRv;
        console.log(rv.length);


        for (let i = 0; i < rv.length; i++) {
            let dateToCheck = moment(rv[i].pick_up_date).format("LL");
            let dateToCheck2 = moment(rv[i].drop_off_date).format("LL")
            let selectedStartDate = moment(event.target.value).format("LL")
            if (moment(event.target.value).isBetween(dateToCheck, dateToCheck2) || selectedStartDate === dateToCheck || selectedStartDate === dateToCheck2) {
                alert('The date of ' + selectedStartDate + ' is not available. Please select another date')
                this.setState({
                    [dateSelections]: ''
                })
                return false;
            }

        }
        this.setState({
            [dateSelections]: event.target.value
        })

    }

    handleReservation = () => {
        this.props.dispatch({
            type: 'FETCH_RESERVED_ALREADY',
            payload: Number(this.props.match.params.id)
        })
    }

    handleBooking = () => {
        let id = Number(this.props.match.params.id)
        let dates = this.state;
        console.log(`we booking now`, id);
        if (this.state.startDate !== '' || this.state.returnDate !== '') {
            this.props.history.push(`/payment/${id}/${dates.startDate}/${dates.returnDate}`)
        }
        else {
            alert('Please select your reservation dates!')
        }
    }

    handleClick = () => {
        this.props.history.push('/summary')
    }


    render() {
        console.log(this.state);

        return (
            <>

                <div className="grid">
                    <div className="grid-col grid-col_8" align="center">

                        <Paper>
                            <Calendar />
                        </Paper>
                        <Paper>
                            <h3>Pick An Arrival Window</h3>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="other" control={<Radio />} label="Between 1:00PM - 3:00PM" />
                                    <FormControlLabel value="female" control={<Radio />} label="Between 3:00PM - 5:00PM" />
                                    <FormControlLabel value="male" control={<Radio />} label="Between 5:00PM - 7:00PM" />
                                </RadioGroup>
                            </FormControl>

                        </Paper>
                    </div>

                </div>
                <div align="right">
                            <Button
                            primary
                            variant="contained"
                            onClick={this.handleClick}
                            >
                            Next
                            </Button>

                            </div>



            </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Booking);