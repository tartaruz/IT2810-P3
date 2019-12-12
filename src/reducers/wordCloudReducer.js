import {WORD_CLICKED} from '../actions/types';

//Evaluates the type and updates the state accordingly
export default function(state = '', action) {
    switch(action.type) {
        case WORD_CLICKED:
            return action.category
        default:
            return state;
    }
}
