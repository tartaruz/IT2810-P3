import React, { Component } from 'react';
import ExpandSearch from './ExpandSearch';
import SearchOptions from './SearchOptions';
import Search from './Search';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';



const SearchContainer = (props) => { 
        return ( 
            props.tab ===1 && 
            <div  id="search-container">
                <div>
                <Search id ="search"/>
                </div>
                <ExpandSearch />
                <SearchOptions/>
                <SearchResult />
            </div>
         );
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    tab: state.tabReducer
})
 
export default connect(mapStateToProps)(SearchContainer);
