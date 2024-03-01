import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInit: false,
};

export const initSocketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        changeStatus: (state) => {
            state.isInit = true;
        },
    },
});

export const { changeStatus } = initSocketSlice.actions;

export default initSocketSlice.reducer;
