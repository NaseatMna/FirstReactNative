import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/constants';
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from '../api/data'

function* fetchData (action) {
  try {
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga