import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import {FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '1%'
  },
  heading: {
    margin: 'auto',
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
  movImg: {
    height: '10%',
    width: '10%'
  }, 
  body:{
    backgroundColor: '#F5F5F5'
  },
  movieText:{
    margin: 'auto'
  }
}));


toast.configure();
// notifies when the user has voted, and if the user tries to vote again
let notify =(data)=>{
  console.log(data)
  if (data.Vote<0){
    toast.error("You downvoted \""+data.Movie+"\"")
    toast.error("Current votes:"+data.CurrentVotes)
  }else{
    toast.success("You upvoted \""+data.Movie+"\"")
    toast.success("Current votes:"+data.CurrentVotes)
  }
}

//handles up or down voting of a movie
let handleVote = (e) =>{
  console.log(e.target.value.split("#"))
  let voteValue = e.target.value.split("#")[1]
  let movieID = e.target.value.split("#")[0]
  console.log(movieID)
  if ((localStorage.getItem(movieID))!=="voted"){
    axios.post("http://localhost:3000/vote/id="+movieID+"&vote="+voteValue).then(res => res.data)
    .then(data => notify(data))
    localStorage.setItem(movieID, "voted")
  }
  else {
    toast.info("You have already voted this movie")
  }
  
}


const MovieSearchInfo = (props) => {
  const classes = useStyles();
  const { movie } = props;

 
  return (
    <div className={classes.root} id='resultMovies'>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <img className={classes.movImg} src={movie.Poster} alt="Logo" />
          <Typography className={classes.heading}>
            {movie.Title} ({movie.DateString}) 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.body}>
            <Typography className={classes.movieText} component={'span'} variant={'body2'}>
            <h3>Director: {movie.Director}</h3>
            <h3>Genre: {movie.Genre.map(genre => genre+" ")}</h3>
            <h3>Actors: {movie.Actors}</h3>
            <h3>{movie.Plot}</h3>
            
            
            
            <button id="upVoteBtn" value={movie._id+"#up"} onClick={handleVote}><FaArrowAltCircleUp/> Upvote</button>
            <button id="downVoteBtn" value={movie._id+"#down"} onClick={handleVote}>Down <FaArrowAltCircleDown/></button>
            <p> Votes: {movie.Votes}</p>
            </Typography>
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieSearchInfo);

