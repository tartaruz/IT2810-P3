import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchMoviesByTitle, fetchAllMovies, 
    fetchFilteredMovies, fetchFilteredTitleMovies, handleReset } from '../../actions/movieAction'
import { handleSearch } from '../../actions/searchAction'; 
import {resetPage} from '../../actions/pageAction';
import './Search.css';

class Search extends Component{

    //In case the user already has searched before and loaded the page a few times,
    //we have to reset the page before checking the search
    pageReset = () => {
        this.props.handleResetPage();
        this.checkSearch();
    }

    checkSearch =() => {
        /* Have to check the values of the the filtered categories and if sort by date is checked
           Sends the updated values to the respective methods to dispatch the different
           fetching methods*/
        let byDate = false
        let categories = []
        
        for (var key in this.props.filterSort) {
            if (key === "byDate") {
                byDate = this.props.filterSort[key]
            } else if (this.props.filterSort[key]) {
                categories.push(key)
            }
        }
        
        //handle empty search
        if(this.props.inputValue==='' && categories.length===0) {
            this.props.handleEmptySearch(this.props.page, byDate)  
        }
        
        //handle only title search
        else if(this.props.inputValue!== '' && categories.length===0){
            this.props.handleTitleSearch(this.props.inputValue,this.props.page, byDate)
        }
        //handle title + genre search
        else if(this.props.inputValue!== "" && categories.length>0) {
            this.props.handleFilterAndTitleSearch(this.props.page, this.props.inputValue,categories, byDate)
        }
        //handle only genre search
        else if(this.props.inputValue==='' && categories.length>0) {
            this.props.handleFilteredSearch(this.props.page, categories, byDate)
        }
        this.props.resetMovies()   
        this.props.handleResetPage()
    }

    render(){
        return(
            <div className="searchBox">
                <div>
                    <input id="searchInput" type="text" name="title" 
                    onChange={(e) => this.props.handleChangedInput(e)} value={this.props.inputValue} 
                    placeholder="Type a movie title, or nothing to show all"/>
                    <a id="searchBtn" href="#resultMovies" onClick={() => {this.pageReset(); window.scrollTo(0,800);}}>Search</a>
                </div>
            </div>
        );
    }
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    movies: state.movies,
    inputValue: state.searchReducer,
    page: state.pageReducer,
    filterSort: state.filterSortReducer

    
});

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
    handleResetPage: () => dispatch(resetPage()),
    handleTitleSearch: (title, page, byDate) => dispatch(fetchMoviesByTitle(title, page, byDate)),
    handleEmptySearch: (page, byDate) => dispatch(fetchAllMovies(page, byDate)),
    handleFilteredSearch: (page, categories, byDate) => dispatch(fetchFilteredMovies(page, categories, byDate)),
    handleFilterAndTitleSearch: (page, title, categories, byDate) => dispatch(fetchFilteredTitleMovies(page, title, categories, byDate)),
    handleChangedInput: (event) => {
        // dispatch(resetPage()),
        dispatch(handleSearch(event.target.value))
    },
    resetMovies: () => dispatch(handleReset())
    

});

export default connect(mapStateToProps,mapDispatchToProps)(Search);
