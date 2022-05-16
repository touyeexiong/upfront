import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux'
import mapStoreToProps from "../../redux/mapStoreToProps";
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Box } from '@material-ui/core';


class NeedClean extends Component {

    state = {
        appID: '',
        package: '',
        price: ''
    }

    componentDidMount() {
        this.setstate({
            appID: this.props.match.params.id
        })
        console.log("in needclean", this.props.match.params);
    }

    handleClick = () => {

        this.props.history.push('contact')

    }
    render() {
        return (
            <>
                <div align="center">
                    <Box component="span">
                        <Button color="primary" variant="outlined">Final Cost: $</Button>
                    </Box>
                    <h1>What needs to be cleaned?</h1>
                    <div align="left">
                        <h4>Carpet Cleaning</h4>

                    </div>
                    <FormControl component="fieldset">
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="5 Room Package" />
                        <FormControlLabel value="disinifectant" control={<Radio />} label="4 Room Package" />
                        <FormControlLabel value="vehicle" control={<Radio />} label="3 Room Package" />
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="2 room Package" />
                        <FormControlLabel value="disinifectant" control={<Radio />} label="1 Room Package" />
                    </FormControl>
                    <div align="left">

                        <h4>Disinfectant</h4>
                    </div>
                    <FormControl component="fieldset">
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="Fogging > 2,500 sq. ft." />
                        <FormControlLabel value="disinifectant" control={<Radio />} label="Fogging < 2,500 sq. ft." />
                    </FormControl>
                    <div align="left">

                        <h4>Vehicle</h4>
                    </div>
                    <FormControl component="fieldset">
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="Small Car/Sedan Cleaning" />
                        <FormControlLabel value="disinifectant" control={<Radio />} label="Mid-Size SUV/Pick-Up Truck Cleaning" />
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="Large SUV/Van Cleaning" />
                        <FormControlLabel value="disinifectant" control={<Radio />} label="Vehicle Floor Cleaning Only Cleaning" />
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


            </>
        )
    }
}

export default connect(mapStoreToProps)(NeedClean)