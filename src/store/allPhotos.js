import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPhotos: [],
};

const allPhotosSlice = createSlice({
    name: 'allPhotos',
    initialState: initialState,
    reducers: {
        setAllPhotos: (state, action) => {
            state.allPhotos = action.payload
        }
    },
}
);

export const { setAllPhotos } = allPhotosSlice.actions;
export default allPhotosSlice.reducer;