import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu';
import mapStoreToProps from "../../redux/mapStoreToProps";
import Grid from '@material-ui/core/Grid';
import './OrderOnline.css';
import { connect } from 'react-redux';
class OrderOnline extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }

    render() {
        return (
            <>
                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <Grid justify="space-evenly" container spacing={3}>
                            {this.props.store.getMenu.map((items) => {
                                return (
                                        <OrderOnlineMenu key={items.id} id={items.id} name={items.name} price={items.price} />
                                )
                            })}
                    </Grid>
                </div>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);