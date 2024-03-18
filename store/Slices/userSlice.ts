import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userT, messageT,tokenT } from "../../modules/modules";

const initialState: userT = {
    username: "",
    roomId: "",
    messages: [],
    id: "",
    token: {
        value: "",
        expiry:0,
        message:""
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userT>) => ({
            ...state,
            ...action.payload,
        }),
        setToken: (state, action: PayloadAction<tokenT>) => ({
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
