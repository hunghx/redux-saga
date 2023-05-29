import { put } from "redux-saga/effects";

export const login = function*(action){
    // call api 
    console.log('====================================');
    console.log(action.payload);
    console.log('====================================');
    yield put({
            type: 'LOGIN_SAGA',
            payload: "helo saga"
        })
}

export const logout = function*(action){

}
