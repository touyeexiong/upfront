import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* postBusinessType(action) {
    try {
        let response = yield axios.post('api/services/type/post', action.payload)
        console.log('we in get Appointment call for reducer', response.data);
        
        yield put({ type: 'SET_APPOINTMENT', payload: response.data })
    }
    catch (error) {
        console.log('appointment post broken at saga', error);
    }
}

function* updateServices(action) {
    try {
        let response = yield axios.put('/api/services/type/update', action.payload)
        console.log('we in update services', action.payload);        
        yield put({ type: 'SET_APPOINTMENT', payload: response.data })
    }
    catch (error) {
        console.log('error in put', error);
        
    }
}

function* servicesSaga() {
    yield takeLatest('POST_BUSINESS_TYPE', postBusinessType)
    yield takeLatest('UPDATE_SERVICES', updateServices)
}

export default servicesSaga