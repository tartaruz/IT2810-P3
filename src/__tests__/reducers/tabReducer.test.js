import React from 'react'; 
import tabReducer from '../../reducers/tabReducer'; 
import { TAB_CHANGED } from '../../actions/types'; 
import TestRunner from 'jest-runner';


describe('tabReducer', () => {
    it('It should render without errors', () => {

    }); 
})

describe('tabreducer', () => {
    it('should return the correct state', () => {
        expect(tabReducer(2,{type: TAB_CHANGED})).toMatchSnapshot();
    })
})
