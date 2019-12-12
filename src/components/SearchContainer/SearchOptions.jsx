import React from 'react';
import { connect } from 'react-redux';
import { handleSearch } from '../../actions/searchAction';
import {resetPage} from '../../actions/pageAction';
import {filterSortChange} from '../../actions/filterSortAction';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const categories = ["Action",
"Adventure",
"Fantasy",
"Sci-Fi",
"Thriller",
"Animation",
"Comedy",
"Family",
"Musical",
"Romance",
"Mystery",
"Western",
"Drama",
"History",
"Sport",
"Horror",
"Crime",
"War",
"Biography",
"Music",
"Documentary",
"Short",
"News",
"Film-Noir",
"Reality-TV"]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space'
   
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const SearchOptions = (props) => {
  const classes = useStyles();

  //When the user has checked/unchekcked a filter or sort
  const handleChange = (event) => {
    props.handleReset()
    props.filterChanged(event.target.value, event.target.checked)
    

  };


  return (
    props.isExpanded && 
    <div className={classes.root} id="searchOptions">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filter</FormLabel>
        <FormGroup>
          {categories.map(category => 
            <FormControlLabel
              key={category}
              control={<Checkbox checked={props.filter[category] || false} onChange={(e) => handleChange(e)} value={category}  color="primary"/>}
              label={category}
            />
          )}
        </FormGroup>
      </FormControl>
      <FormControl  component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Sort</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={props.filter.byDate} onChange={(e) => handleChange(e)} value="byDate" />}
            label="By date"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
    filter: state.filterSortReducer,
    isExpanded: state.expandReducer
})

// Receives the dispatch() method and returns callback-props
const mapDispatchToProps = (dispatch) => ({
  handleReset: () =>   dispatch(resetPage()),
  filterChanged: (category, checked) => {
      dispatch(filterSortChange(category, checked))

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);