import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    validationValue: '',
};

const validationValueSlice = createSlice({
    name: 'validationValue',
    initialState: initialState,
    reducers: {
        setValidationValue: (state, action) => {
            state.validationValue = action.payload
        }
    },
}
);

export const { setValidationValue } = validationValueSlice.actions;
export default validationValueSlice.reducer;