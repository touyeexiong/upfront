import React, { Component } from "react";
import { connect } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { Paper } from "@material-ui/core";

class PropertyType extends Component {

    componentDidMount() {
    }

    getID = () => {
        this.props.dispatch({
            type: 'FETCH_CONTACT',
            payload: this.props.match.params.id
        });
    }

    handleClick = () => {
        
        this.props.history.push('/services')

    }

    render() {
        return (
            <>
            <Paper>


            <div align="center">
            <h1>Is this a business or a home?</h1>
                <FormControl component="fieldset">
                    <FormControlLabel value="Home" control={<Radio />} label="Home"/>
                    <FormControlLabel value="Business" control={<Radio />} label="Business"/>

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