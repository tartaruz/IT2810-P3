import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import filterSortReducer from './filterSortReducer';
import expandReducer from './expandReducer';
import movieReducer from './movieReducer';
import tabReducer from './tabReducer';
import pageReducer from './pageReducer';
import wordCloudReducer from './wordCloudReducer';

// Turns an object into a single reducer function that you can pass to createStore()
export default combineReducers({
    movies: movieReducer,
    searchReducer: searchReducer,
    filterSortReducer: filterSortReducer,
    expandReducer: expandReducer ,
    tabReducer: tabReducer,
    pageReducer: pageReducer,
    wordCloudReducer: wordCloudReducer
});