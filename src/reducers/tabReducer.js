import {TAB_CHANGED} from '../actions/types';

//Evaluates the type and updates the state accordingly
export default function(state = 1, action) {
    switch(action.type) {
        case TAB_CHANGED:
            return action.tab
        default:
            return state;
    }
}

