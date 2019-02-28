import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOADING } from './types';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';

export const emailTyping = (email) => dispatch => {
    dispatch({
        type: EMAIL_CHANGED,
        payload: email
    })
}

export const passwordTyping = (password) => dispatch => {
    dispatch({
        type: PASSWORD_CHANGED,
        payload: password
    })
}

export const loginUser = (email, password) => dispatch => {
    dispatch(loginLoading());
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(loginSuccess(user.user))
        })
        .catch(err => {
            dispatch(loginFail(err.message));
        })
}

export const loginLoading = () => dispatch => {
    dispatch({
        type:AUTH_LOADING,
        payload:true
    })
}

export const loginSuccess = (user) => dispatch => {
    dispatch({
        type: AUTH_SUCCESS,
        payload: user
    })
    Actions.employees_list();
}

export const loginFail = (err) => dispatch => {
    dispatch({
        type: AUTH_ERROR,
        payload:err
    })
}