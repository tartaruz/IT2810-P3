import React from 'react';
import { connect } from 'react-redux';
import {handleTabChange} from '../../actions/tabAction';
import {fetchMostPopular, handleReset} from '../../actions/movieAction';
import logo from "../../img/mongoflix.png"
import {resetPage} from '../../actions/pageAction';
import {resetSearch} from '../../actions/searchAction';
import { resetFilterSort } from '../../actions/filterSortAction';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Header.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

const Header = (props) => {
    const classes = useStyles();

    return(
        <nav id='header'>
            <h1><img id="mongoflixLogo" src={logo} alt="mongoflix"></img></h1>
            <Button variant="contained" className={classes.button} id="SearchPage" onClick={() => props.changeToTab1(1)}>Search</Button>
            <Button variant="contained" className={classes.button} id="showFavourite" onClick={() => props.changeToTab2(2, props.page)}>Show popular</Button>
            <Button variant="contained" className={classes.button} id="advancedView" onClick={() => props.changeToTab3(3)}>Advanced view</Button>
        </nav>
    );
};

// Maps the global redux-state to props
const mapStateToProps = state => ({
    tab: state.tabReducer,
    page: state.pageReducer,
    filterSort: state.filterSortReducer,
    inputValue: state.searchReducer
})

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
    changeToTab1: (tab) => {
        dispatch(handleReset());
        dispatch(resetPage());
        dispatch(handleTabChange(tab));
    },
    changeToTab2: (tab, page) => {
        dispatch(handleReset());
        dispatch(resetPage());
        dispatch(resetSearch())
        dispatch(resetFilterSort())
        dispatch(fetchMostPopular(page));
        dispatch(handleTabChange(tab));
    },
    changeToTab3: (tab) => {
        dispatch(handleReset());
        dispatch(resetPage());
        dispatch(handleTabChange(tab));
        dispatch(resetSearch())
        dispatch(resetFilterSort())

    },

})


 
export default connect(mapStateToProps, mapDispatchToProps)(Header);