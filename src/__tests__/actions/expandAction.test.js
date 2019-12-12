import React from 'react'; 
import * as actions from '../../actions/expandAction'; 
import TestRunner from 'jest-runner';
import * as types from '../../actions/types'

describe('actions', () => {
    it('should create an action to expand', () => {
        const expectedAction = {
            type: types.EXPAND
        }
    expect(actions.handleExpand()).toMatchSnapshot(); 
    })
})

/*describe('actions', () => {
    it('should create an action to expand', () => {
        const expectedAction = {
            type: types.EXPAND
        }
    expect(actions.handleExpand()).toEqual(expectedAction)
    })
})*/