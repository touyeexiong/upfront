import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchMenu() {
    try {
        console.log(`we in fetch menu`);
        
        const response = yield axios.get(`api/getMenu`)
        yield put ({ type: 'SET_MENU', payload: response.data });
    }
    catch (error) {
        console.log(`menu get has an error`, error);
        
    }
}

function* getMenuSaga() {
    yield takeLatest ('FETCH_MENU', fetchMenu)
}

export default getMenuSaga