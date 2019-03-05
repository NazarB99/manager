import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {Actions} from 'react-native-router-flux';
import {EMPLOYER_UPDATE, RESET_DATA, GET_EMPLOYEES, SET_EMPLOYEES, EMPLOYEE_EDIT} from "./types";

export const employersUpdate = ({prop,value}) => dispatch => {
    dispatch({
        type:EMPLOYER_UPDATE,
        payload:{prop,value}
    })
};

export const employersCreate = (name,phone,shift) => dispatch => {
    const {currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(() =>{
            dispatch({type:RESET_DATA});
            Actions.employees_list({type:'reset'})
        })

};

export const getEmployees = () => dispatch => {
    const {currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
            dispatch({type:GET_EMPLOYEES,payload:snapshot.val()})
        })
};

export const employeeData = ({name,phone,shift,uid}) => dispatch => {
    dispatch({
        type:SET_EMPLOYEES,
        payload:{name,phone,shift,uid}
    })
};

export const employeeEdit = (name,phone,shift,employee_uid) => dispatch => {
    const {currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees/${employee_uid}`)
        .set({name,phone,shift})
        .then(() => {
            dispatch({type:RESET_DATA});
            Actions.employees_list({type:'reset'})
        })
};