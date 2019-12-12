import React,{Component} from 'react';
import MovieSearchInfo from './MovieSearchInfo.jsx'
import { connect } from 'react-redux';
import {handleLoadMore} from '../../actions/pageAction';
import {fetchMostPopular} from '../../actions/movieAction';
import {fetchOneCategory} from '../../actions/movieAction';
import { fetchMoviesByTitle, fetchAllMovies, 
    fetchFilteredMovies, fetchFilteredTitleMovies } from '../../actions/movieAction'
import './SearchResult.css';


class SearchResult extends Component{

    // Calls mapDispatchToProps() to dispatch the function in the pageAction,
    //then calls handleLoadMore()
    handlePageUpdate = () => {
        this.props.pageLoadMorelicked()
        this.handleLoadMore()
    }

    //This function checks which tab the user is on. If the user is at the search page
    //the function needs to check the state for the search
    handleLoadMore = () => {
        if(this.props.tab===1) {

            //Checks the values of the filtered categories and sort in the store
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
                console.log(("number movies "+this.props.count))
                this.props.handleTitleSearch(this.props.inputValue,this.props.page, byDate)
                
            }
            //handle title + genre search, fetch 10 more movies
            else if(this.props.inputValue!== "" && categories.length>0) {
                this.props.handleFilterAndTitleSearch(this.props.page, this.props.inputValue,categories, byDate)
            }
            //handle only genre search, fetch 10 more movies
            else if(this.props.inputValue==='' && categories.length>0) {
                this.props.handleFilteredSearch(this.props.page, categories, byDate)
            }   
        }
        else if (this.props.tab===2) {
            //fetch 10 more popular movies
            this.props.getNextPopular(this.props.page)
        }
        else if(this.props.tab===3) {
            //fetch 10 more movies from the category
            this.props.getNextCategory(this.props.category, this.props.page)
        }
    }

    render(){
        return(

            <div className="searchResults">
            <div>{
            (this.props.count!=='' && this.props.count[0].Results===0 ? <h2 id = "no-result-msg">No results in database</h2>:'' )}</div>
                {this.props.movies.map(movie =><MovieSearchInfo key={movie._id} movie={movie}/>)}
                <div>
                 {this.props.count!=="" && ((this.props.page+1)*10 <= this.props.count[0].Results ? 
                 <button id = "load-more-btn" onClick= {() => this.handlePageUpdate()}>Load more</button> : '')}
                </div>
            </div>
        )
    }
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    page: state.pageReducer,
    movies: state.movies.result,
    count: state.movies.count,
    tab: state.tabReducer,
    category: state.wordCloudReducer,
    genre: state.filterSortReducer,
    byDate: state.filterSortReducer.byDate,
    inputValue: state.searchReducer 
    
})

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
    pageLoadMorelicked: () => dispatch(handleLoadMore()),
    handleTitleSearch: (title, page, byDate) => dispatch(fetchMoviesByTitle(title, page+1, byDate)),
    handleEmptySearch: (page, byDate) => dispatch(fetchAllMovies(page+1, byDate)),
    handleFilteredSearch: (page, categories, byDate) => dispatch(fetchFilteredMovies(page+1, categories, byDate)),
    handleFilterAndTitleSearch: (page, title, categories, byDate) => dispatch(fetchFilteredTitleMovies(page+1, title, categories, byDate)),
    getNextPopular: (page) => dispatch(fetchMostPopular(page+1)),
    getNextCategory: (word, page) => dispatch(fetchOneCategory(word, page+1))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);