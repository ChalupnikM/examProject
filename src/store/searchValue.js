import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
};

const searchValueSlice = createSlice({
    name: 'searchValue',
    initialState: initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    },
}
);

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;