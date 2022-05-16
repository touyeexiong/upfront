import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* postContact(action) {
    console.log('we in saga for post',action.payload);
    
    try {
        yield axios.post('api/contact/post', action.payload)
    }
    catch (error) {
        console.log('contact post broken at saga', error);
    }
}

function* fetchContact(action) {
    console.log("we fetch", action.payload);
    
    try {
        const response = yield axios.get('/api/contact/', action.payload)
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