import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Paper, RadioGroup } from '@material-ui/core';



class Services extends Component {

    state = {
        id: '',
        service: '',
    }

    componentDidMount() {
        console.log("services pass through id", this.props.reduxState.getAppointmentReducer.id
        
        );
    }

    handleChange = (event) => {
        this.setState({
            service: event.target.value,
            id: this.props.reduxState.getAppointmentReducer.id
        })
        console.log(this.state);
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'UPDATE_SERVICES',
            payload: this.state
        })
        // this.props.dispatch({
        //     type: 'FETCH_PRODUCTS',
        // })
        this.props.history.push(`/need-clean/${this.props.reduxState.getAppointmentReducer.id}`)

    }
    render() {
        return (
            <>
                <Paper>

                    <div align="center">
                        <h1>What needs to be cleaned?</h1>
                        <h4>Select All That Apply</h4>
                        <FormControl component="fieldset">
                            <RadioGroup
                            onChange={this.handleChange}
                            >
                                <FormControlLabel value="carpet-cleaning" control={<Radio />} label="Carpet Cleaning" />
                                <FormControlLabel value="vehicle" control={<Radio />} label="Vehicle" />
                            </RadioGroup>
                        </FormControl>
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


                </Paper>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(Services)