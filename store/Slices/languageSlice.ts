import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "../../modules/modules";

const initialState:LanguageState = {
    language: "DK",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        ukr: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },

        eng: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },

        dk: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});


export const { ukr, eng, dk } = languageSlice.actions

export default languageSlice.reducer