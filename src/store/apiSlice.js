import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { setAllPhotos } from '../store/allPhotos';

export const getApi = createAsyncThunk(
    'api/getApi',
    async (propsValue, thunkAPI) => {
        try {
            const ApiKey = 'HHJJ-3BSjvgICRaHgrH0Sjx-YPSdZkt_t0hlLr1BBoQ';
            const searchValue = propsValue;

            const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${ApiKey}`;

            const response = await axios.get(url)
            console.log(response);

            thunkAPI.dispatch(setAllPhotos(response.data.results))

            return response.data.results;

        } catch (error) {
            console.log(error);
        }

    }
)

const initialState = {
    array: [],
    status: '',
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    extraReducers: {
        [getApi.pending]: (state) => {
            state.status = 'loading'
        },
        [getApi.fulfilled]: (state, { payload }) => {
            state.status = 'succes'
            state.array = payload
        },
        [getApi.pending]: (state, action) => {
            state.status = 'failed'
        },
    },
});

export default apiSlice.reducer;