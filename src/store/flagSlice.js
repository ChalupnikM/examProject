import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flag: '',
};

const flagSlice = createSlice({
    name: 'flag',
    initialState: initialState,
    reducers: {
        setFlag: (state, action) => {
            state.flag = action.payload
        }
    },
}
);

export const { setFlag } = flagSlice.actions;
export default flagSlice.reducer;