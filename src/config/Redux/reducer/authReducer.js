const initialState = {
    profile: {},
    error: null,
    message: null,
    status: null,
}
const AuthReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
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
        case 'GET_USER':
            return{
                ...state,
                profile: action.payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                profile:{
                    ...state.profile,
                    data:{
                        ...state.profile.data,
                        ...action.payload.data
                    }
                } 
            }
        case 'CHANGE_VALUE':
            console.log('halo', state.profile.data);
            return {
                ...state,
                profile: {
                    data : {
                        ...state.profile.data,
                        ...action.payload
                    }
                },
            }
        default:
            return state
            }
    }

    export default AuthReducer
