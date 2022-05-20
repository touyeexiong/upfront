import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* fetchProducts(action) {
    try {
        const response = yield axios.get('/api/products', action.payload)
        yield put ({ type: 'SET_PRODUCTS', payload: response.data})
    }
    catch(error) {
        console.log('products GET saga has an error', error);
        
    }
}


function* productsSaga() {
    yield takeLatest('FETCH_PRODUCTS', fetchProducts)
}

export default productsSaga