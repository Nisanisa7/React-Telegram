const initialState = {
    profile: {},
    error: null,
    message: null,
    status: null,
}


const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                profile: action.payload
            }
        case 'REGISTER':
            return {
                ...state,
                profile: action.payload,
                // formSubmitted: false
            }
        default:
            return state
    }
}

export default AuthReducer
