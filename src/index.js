import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';


import * as serviceWorker from './serviceWorker';

//STORE - GLOBALIZED STATE
//let store = createStore(reducer);

//ACTION , i.e increment or expansion, describes what you can do
// const regSearch = () => {
//     return {
//         type: 'REGULARSEARCH'
//     }
// }

// const advSearch = () => {
//     return {
//         type: 'ADVANCEDSEARCH'
//     }
// }

// const sortChanged = () => {
//     return {
//         type: 'SORTCHANGED'
//     }
// }

// const filterChanged = () => {
//     return {
//         type: 'FILTERCHANGED'
//     }
// }

// const likeMovie = () => {
//     return {
//         type: 'LIKEMOVIE'
//     }
// }
// const EXPANDSEARCHFIELD = () => {
//     return {
//         type: 'EXPANDSEARCHFIELD'
//     }
// }

// const reduceSearchField = () => {
//     return {
//         type: 'REDUCESEARCHFIELD'
//     }
// }

//REDUCER



//DISPATCH

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
