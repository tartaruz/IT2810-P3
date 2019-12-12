import React from 'react'; 
import pageReducer from '../../reducers/pageReducer'; 
import TestRunner from 'jest-runner';
import {LOAD_MORE} from '../../actions/types';
import {RESET_PAGE} from '../../actions/types';

describe('page reducer', () => {
    it('should return the initial state', () => {
        expect(pageReducer(1,{type: LOAD_MORE})).toEqual(2);
    })
})

describe('page reducer', () => {
    it('should return the initial state', () => {
        expect(pageReducer(1,{type: RESET_PAGE})).toMatchSnapshot();
    })
})