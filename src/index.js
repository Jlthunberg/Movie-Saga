import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAILS', getDetails);

}

function* getMovies() {
    try {
        const response = yield axios.get('/api/movie');
        console.log('in getMovies', response.data);
        yield put({ type: 'SET_MOVIES', payload: response.data}); 
    } catch (err) {
        console.log('error in getMovies', err);
    }
}

function* getDetails(action) {
    try{
        let response = yield axios.get(`/api/detail/${action.payload}`)
        console.log('in get details', response.data)
        yield put({type: 'THE_DETAILS', payload: response.data})
    } catch(error) {
        console.log('error in getDetails', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('SET_GENRES', action.payload)
            return action.payload.name;
        default:
            return state;
    }
}

//send details of movie
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'THE_DETAILS':
            console.log('THE_DETAILS', action.payload)
            return action.payload.name;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
