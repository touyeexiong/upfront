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
import { Box } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, RadioGroup } from "@material-ui/core";


class NeedClean extends Component {

    state = {
        appID: Number(this.props.match.params.id),
        type: this.props.reduxState.getAppointmentReducer,
        package: '',
        price: '',
        total: '',
        packages_selected: '',
    }

    componentDidMount() {
        // this.handleInfo ();
        this.getProducts();
        console.log("in needclean", this.state);
    }

    getProducts = () => {
        this.props.dispatch({
            type: 'FETCH_PRODUCTS'
        })
    }

    handleInfo = () => {
        this.setstate({
            type: this.props.reduxState.getAppointmentReducer
        })
    }

    handleClick = () => {

        this.props.history.push('/contact')

    }

    handleSelected = (event) => {
        console.log(event.target.value, event.target.id);
        let total = this.state.total
        let sum = total + Number(event.target.value)
        if (this.state.total = ''){
            this.setState( {
                total: Number(event.target.value)
            })
        } else {
            this.setState({
                total: Number(total) + Number(event.target.value)
            })
        }


    }
    render() {
        return (
            <>
                <div align="center">
                    <Box component="span">
                        <Button color="primary" variant="outlined">Final Cost: ${this.state.total}</Button>
                    </Box>
                    <h1>What needs to be cleaned?</h1>
                    <div align="center">
                        <h4>Services Offered</h4>

                    </div>
                        <TableContainer>
                            <TableBody>
                                {this.props.reduxState.getProductsReducer.map((product) => {
                                    return (
                                        <TableRow key={product.id}>
                                            
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>${product.price}</TableCell>
                                            <button id={product.id} value={product.price} onClick={this.handleSelected}>Select</button>
                                        </TableRow>
                                    )
                                })}
                        
                            </TableBody>
                        </TableContainer>
                    {/* <FormControl component="fieldset">
                        <FormControlLabel value="carpet-cleaning" control={<Radio />} label="5 Room Package" />
                        <FormControlLabel value="disinfectant" control={<Radio />} label="4 Room Package" />
                        <FormControlLabel value="vehicle" control={<Radio />} label="3 Room Package" />
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
                    </FormControl> */}
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

export default connect(mapReduxStateToProps)(NeedClean)