import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleExpand} from '../../actions/expandAction';

class ExpandSearch extends Component {

    render() { 
        return ( 
            <div id="expandSearch">
            <button id = "expanson-btn" onClick={this.props.expandedClick}>Advanced search</button>
            </div>
         );
    }
}
 
// Maps the global redux-state to props
const mapStateToProps = state => ({
    expand: state.expandReducer
})

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
    expandedClick: () => dispatch(handleExpand())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(ExpandSearch);