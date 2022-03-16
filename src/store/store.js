import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

import allPhotosReducers from './allPhotos';
import suggestionReducers from './suggestionSlice';
import apiReducer from './apiSlice';
import SuggestionApiReducer from './suggestionApiSlice';
import searchReducer from './searchValue';
import flagReducer from './flagSlice'

export const store = configureStore({
    reducer: {
        allPhotos: allPhotosReducers,
        suggestion: suggestionReducers,
        api: apiReducer,
        sugApi: SuggestionApiReducer,
        searchValue: searchReducer,
        flag: flagReducer,
        
    },
    middleware: (applyMiddleware) => applyMiddleware(thunk)
});

