import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

import allPhotosReducers from './allPhotos';
import suggestionReducers from './suggestionSlice';
import apiReducer from './apiSlice';
import SuggestionApiReducer from './suggestionApiSlice';
import searchReducer from './searchValue';

export const store = configureStore({
    reducer: {
        allPhotos: allPhotosReducers,
        suggestion: suggestionReducers,
        api: apiReducer,
        sugApig: SuggestionApiReducer,
        searchValue: searchReducer,
        
    },
    middleware: (applyMiddleware) => applyMiddleware(thunk)
});

