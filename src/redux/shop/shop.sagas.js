import { takeLatest, call, put, all } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }

//     collectionRef.get().then(snapShot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         }).catch(error => dispatch(fetchCollectionsFailure(error)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}