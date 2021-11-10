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




class Services extends Component {

    handleClick = () => {

        this.props.history.push('/need-clean')
    
    }
    render() {
        return (
            <>
            <div align="center">
                <h1>What needs to be cleaned?</h1>
                <h4>Select All That Apply</h4>
                <FormControl component="fieldset">
                    <FormControlLabel value="carpet-cleaning" control={<Radio />} label="Carpet Cleaning"/>
                    <FormControlLabel value="disinifectant" control={<Radio />} label="Disinfectant Fogging Treatment"/>
                    <FormControlLabel value="vehicle" control={<Radio />} label="Vehicle"/>
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

export default connect(mapStoreToProps)(Services)