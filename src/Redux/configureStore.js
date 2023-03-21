import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import searchReducer from './searchData';

const composeEnhancers = compose;

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
composeEnhancers(applyMiddleware(thunk));

export default store;