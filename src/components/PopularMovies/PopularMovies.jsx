import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchResult from '../SearchContainer/SearchResult';

const PopularMovies = (props) => {

    return ( 
        props.tab ===2 && 
        <div>
            {props.tab=== 2 ? <div>
          <h2 id= "topMovies">The most popular movies</h2>  <SearchResult/>
          </div> : ''}
        </div>
        );
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    tab: state.tabReducer
})
 
export default connect(mapStateToProps)(PopularMovies);
