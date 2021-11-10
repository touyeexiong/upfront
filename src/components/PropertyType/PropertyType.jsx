import React, { Component } from "react";
import { connect } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";

class PropertyType extends Component {
    render() {
        return (
            <>
                <h1>we here now with zipcode</h1>
            </>)
    }
}

export default connect(mapStoreToProps)(PropertyType)