import {all,takeEvery} from 'redux-saga/effects'
import { login, logout } from './userSaga'

export const rootSaga = function* (){
    yield all([
      takeEvery('LOGIN',login),
      takeEvery('LOGOUT',logout)
    ])
}