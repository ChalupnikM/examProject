import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { setSuggestion } from './suggestionSlice';

export const getSugApi = createAsyncThunk(
    'suggestionApi/getApi',
    async (propsValue, thunkAPI) => {
        try {

            const searchValue = propsValue;
            console.log(searchValue)
            const url1 = `https://unsplash.com/nautocomplete/${searchValue}`;
            const url = 'https://cors-anywhere.herokuapp.com/' + url1;

            const response = await axios.get(url)
            console.log(response);

            thunkAPI.dispatch(setSuggestion(response.data.fuzzy))

            return response.data.fuzzy;

        } catch (error) {
            console.log(error);
        }

    }
)

const initialState = {
    array: [],
    status: '',
}

const suggestionApiSlice = createSlice({
    name: 'suggestionApi',
    initialState,
    extraReducers: {
        [getSugApi.pending]: (state) => {
            state.status = 'loading'
        },
        [getSugApi.fulfilled]: (state, { payload }) => {
            state.status = 'succes'
            state.array = payload
        },
        [getSugApi.pending]: (state, action) => {
            state.status = 'failed'
        },
    },
});

export default suggestionApiSlice.reducer;