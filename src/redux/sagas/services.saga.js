import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* postBusinessType(action) {
    console.log('we in business type saga post', action.payload);
    
}





function* servicesSaga() {
    yield takeLatest( 'POST_BUSINESS_TYPE', postBusinessType)
}

export default servicesSaga