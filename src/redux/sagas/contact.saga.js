import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* postContact(action) {
    console.log('we in saga for post',action.payload);
    
    try {
        let response = yield axios.post('api/contact_information/post', action.payload)
        console.log("we in get portion of saga", response.data)
        yield put({ type: 'SET_CONTACT', payload: response.data })

    }
    catch (error) {
        console.log('contact post broken at saga', error);
    }
}

function* fetchContact(action) {
    console.log("we fetching", action.payload);
    
    try {
        // const response = yield axios.get('/api/contact_information', action.payload)
        const response = yield axios.get(`/api/contact_information/${action.paylaod}`)
        yield put({ type: 'SET_CONTACT', payload: response.data })
    } catch (error) {
        console.log(error);
    }
}

function* contactSaga() {
    yield takeLatest('POST_CONTACT', postContact);
    yield takeLatest('FETCH_CONTACT', fetchContact);
}

export default contactSaga