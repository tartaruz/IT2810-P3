import {FILTERSORT_CHANGED} from '../actions/types';
import {RESET_FILTERSORT} from '../actions/types';

const initialState = {
    byDate: false,
    categories: ''
}

//Evaluates the type and updates the state accordingly
export default function(state = initialState, action) {
    switch(action.type) {
        case FILTERSORT_CHANGED:
            return {
                ...state,
                [action.category]: action.checked,
            }
        case RESET_FILTERSORT:
        return {
               category:"",
               byDate: false
            }
        default:
            return state;
    }
}
