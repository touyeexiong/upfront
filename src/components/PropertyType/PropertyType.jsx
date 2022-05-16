import React, { Component } from "react";
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { Paper, RadioGroup } from "@material-ui/core";

class PropertyType extends Component {

    state = {
        id: '',
        type: '',
    }

    componentDidMount() {
        
    }



    handleClick = () => {
        this.props.dispatch({
            type: 'POST_BUSINESS_TYPE',
            payload: this.state
        })
        this.props.history.push(`/services/${this.props.reduxState.getAppointmentReducer.id}`)
        
    }

    handleChange = (event) => {
        this.setState({
            type: event.target.value,
            id: this.props.reduxState.getContact.id
        })
        console.log("type state", this.state.type)
        console.log("redux here?", this.props.reduxState.getContact.id);
    }

    render() {
        return (
            <>
                <Paper>
                    <div align="center">
                        <h1>Is this a business or a home?</h1>
                        <FormControl component="fieldset">
                            <RadioGroup
                            onChange={this.handleChange}
                            >
                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                <FormControlLabel value="Business" control={<Radio />} label="Business" />
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
            </>)
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PropertyType)