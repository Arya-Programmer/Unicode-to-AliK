import { createSlice } from "@reduxjs/toolkit";

const initialState = { alik: "", unicode: "" };

const conversionSlice = createSlice({
    name: "conversion",
    initialState,
    reducers: {
        updateConversion: (state, action) => {
            const { alik, unicode } = action.payload;
            state = { alik, unicode };
            // console.log("STATE IN SLICE", state);
            return state;
        }
    }
});

export const { updateConversion } = conversionSlice.actions;
export default conversionSlice.reducer;
