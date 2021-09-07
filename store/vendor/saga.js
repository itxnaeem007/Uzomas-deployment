import { all, put, takeEvery } from 'redux-saga/effects';

import { actionTypes, changeVendorSuccess } from './action';

function* changeVendorSaga({ Vendor }) {
    try {
        console.log('Vendor In Saga: ', Vendor);
        yield put(changeVendorSuccess(Vendor));
    } catch (err) {
        console.error(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.SWITCH_TO_SELLER, changeVendorSaga)]);
}
