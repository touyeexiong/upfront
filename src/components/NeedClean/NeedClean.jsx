import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


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
        if (this.state.total = '') {
            this.setState({
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