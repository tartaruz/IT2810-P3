import React, { Component } from 'react'
import { connect } from 'react-redux';
import categories from '../../categories';
import {handleWordClicked} from '../../actions/wordCloudAction';
import {fetchOneCategory} from '../../actions/movieAction';
import SearchResult from '../SearchContainer/SearchResult';
import WordCloud from 'react-d3-cloud';


const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 50;

const WordCloudView = (props) => {

    return ( 
        props.tab===3 &&
        <div style={{ width: '100%', height: '100%', backgroundColor:'rgba(255,255,255,0.8)'}}>
          <WordCloud id = "wordcloud"
            data={categories} 
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            onWordClick={(word) => {props.wordClick(word.text, props.page); window.scrollTo(0,800)}}
          />
          {props.category!== ''? <div>
          <h2 id="genreTitle">Genre: {props.category} Movies</h2>  <SearchResult/>
          </div> : ''} 
        </div> 
        );  
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    category: state.wordCloudReducer,
    tab: state.tabReducer,
    page: state.pageReducer
})

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
    wordClick: (word, page) => {
        dispatch(handleWordClicked(word));
        dispatch(fetchOneCategory(word, page));
    }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(WordCloudView);