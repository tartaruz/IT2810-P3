import React from 'react'; 
import * as actions from '../../actions/searchAction'; 
import TestRunner from 'jest-runner';
import * as types from '../../actions/types'

describe('actions', () => {
    it('should create an action to fetch title', () => {
        const title = "alien"
        const expectedAction = {
            type: types.UPDATE_TEXT,
            title
        }
        expect(actions.handleSearch(title)).toMatchSnapshot(); 
    })
})