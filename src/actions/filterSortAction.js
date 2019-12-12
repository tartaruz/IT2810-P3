import {FILTERSORT_CHANGED} from './types';
import {RESET_FILTERSORT} from './types';


// Gets triggered when someone checked/unchecked a filter category or sort by date
export const filterSortChange = (category, checked) => {
    return {
        type: FILTERSORT_CHANGED,
        category,
        checked,
    }
}

// Gets triggered when the user changed tab from the search page
export const resetFilterSort = () => {
    return {
        type: RESET_FILTERSORT
    }
}