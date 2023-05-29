
const initialState = {
    listUser:[],
    isLogin: false
}
export const reducer =(state = initialState, action)=>{
    switch(action.type){
            case 'LOGIN_SAGA':
                console.log(action.payload);
                return state
            case 'LOGOUT':
                return {
                  ...state,
                    isLogin: false
                }
            default:
                return state
        }
}
