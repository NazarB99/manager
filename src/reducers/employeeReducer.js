import { EMPLOYEE_CREATE, EMPLOYEE_UPDATE } from '../actions/types';

const initialState = {
    employees: [],
    name:'',
    phone:'',
    shift:''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
             return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        default: {
            return {
                ...state
            }
        }
    }
}
