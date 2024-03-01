import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userT, messageT } from "../../modules/modules";

const initialState: userT = {
    username: "",
    roomId: "",
    messages: [],
    id: "",
    token:""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userT>) => ({
            ...state,
            ...action.payload,
        }),
        setToken: (state, action: PayloadAction<string>) => ({
            ...state,
            token:action.payload,
        }),

        
        setMessages: (state, action: PayloadAction<messageT>) => ({
            ...state,
            messages: [...state.messages, action.payload],
        }),
    },
});

export const { setUser, setMessages,setToken } = userSlice.actions;
export default userSlice.reducer;
