import React from 'react';
import './App.css';
import {Provider}from 'react-redux';
import Header from './components/Header/Header'
import AdvancedView from './components/AdvancedView/AdvancedView'
import PopularMovies from './components/PopularMovies/PopularMovies'
import SearchContainer from './components/SearchContainer/SearchContainer'
import store from './store'

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Header />
        <SearchContainer/>
        <PopularMovies/>
        <AdvancedView/>
      </div>
    </Provider>
  );
}


export default App;
