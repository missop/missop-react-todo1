import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import {GET_INIT_LIST} from './actionTypes'
import {initTodoList} from './actionCreator'
function* fetchUser() {
    try {
        const res = yield axios.get('/api/todolist')
        const action = initTodoList(res.data)
        yield put(action)
    } catch (e) {
        alert('请求失败');
    }
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchUser);
}

export default mySaga;