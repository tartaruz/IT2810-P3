import {WORD_CLICKED} from './types';

// Gets triggered when the user has clicked on a category in the wordcloud
export const handleWordClicked = (category) => {
    return {
        type: WORD_CLICKED,
        category
    }
}



