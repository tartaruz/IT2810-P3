import React, { Component } from 'react'
import { connect } from 'react-redux';
import WordCloudView  from './WordCloudView';

const AdvancedView = (props) => {
    return ( 
        props.tab===3 &&
        <div >
            <WordCloudView/>
        </div> 
        );  
}

const mapStateToProps = state => ({
    tab: state.tabReducer,
})

 
export default connect(mapStateToProps)(AdvancedView);

