import {EMPLOYER_CREATE, EMPLOYER_UPDATE, GET_EMPLOYEES, RESET_DATA} from '../actions/types';

const initialState ={
    name:'',
    phone:'',
    shift:'monday',
    employees:{}
};

export default function (state = initialState, action) {
    switch (action.type){
        case EMPLOYER_UPDATE:
            return{
                ...state,
                [action.payload.prop]:action.payload.value
            };
        case RESET_DATA:
            return{
                ...state,
                name:'',
                phone:'',
                shift:''
            };
        case GET_EMPLOYEES:
            return{
                ...state,
                employees:action.payload
            };
        default:
            return{
                ...state
            }
    }
}