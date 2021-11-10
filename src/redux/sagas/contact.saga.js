import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* postContact(action) {
    console.log('we in saga for post',action.payload);
    
    try {
        yield axios.post('api/contact/post', action.payload)
        yield put({
            type: 'GET_CONTACT'
        })
    }
    catch (error) {
        console.log('contact post broken at saga', error);
    }
}

function* fetchContact(action) {
    try {
        const response = yield axios.get('/api/mycontact', action.payload)
        yield put({ type: 'SET_CONTACT', payload: response.data })
    } catch (error) {
        console.log('contact GET has an error', error);
    }
}

function* contactSaga() {
    yield takeLatest('POST_CONTACT', postContact);
    yield takeLatest('FETCH_CONTACT', fetchContact);
}

export default contactSaga