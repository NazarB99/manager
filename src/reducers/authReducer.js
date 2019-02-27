import { EMAIL_CHANGED, PASSWORD_CHANGED, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING } from '../actions/types';

const initial_state = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading:false,
                error:null
            }
        case AUTH_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case AUTH_LOADING:
            return {
                ...state,
                loading: action.payload,
                error:null
            }
        default:
            return {
                ...state
            }
    }
}