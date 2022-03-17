import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { setSuggestion } from './suggestionSlice';

export const getSugApi = createAsyncThunk(
    'suggestionApi/getApi',
    async (propsValue, thunkAPI) => {
        try {
            const searchValue = propsValue;
            const url1 = `http://localhost:3000/${searchValue}`;
            const response = await axios.get(url1,  {
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                  'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
                }
              });
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