import React, { Component } from "react";
import { connect } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { Paper, RadioGroup } from "@material-ui/core";

class PropertyType extends Component {

    state = {
        business_type: '',
    }

    componentDidMount() {
    }



    handleClick = () => {
        this.props.dispatch({
            type: 'POST_BUSINESS_TYPE',
            payload: this.state.business_type
        })
        this.props.history.push('/services')
        
    }

    handleChange = (event) => {
        this.setState({
            business_type: event.target.value
        })
        console.log("type state", this.state.business_type)
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

export default connect(mapStoreToProps)(PropertyType)