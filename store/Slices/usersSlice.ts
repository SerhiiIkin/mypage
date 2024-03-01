import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { usersT, userT, messageT } from "../../modules/modules";

const initialState: usersT = {
    users: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userT>) => ({
            ...state,
            users: [...state.users, action.payload],
        }),
        setUsers: (state, action: PayloadAction<userT[]>) => ({
            ...state,
            users: action.payload,
        }),
        updateUserMessages: (state, action: PayloadAction<messageT>) => ({
            ...state,
            users: state.users.map((user) => {
                if (user.roomId == action.payload.roomId) {
                    return {
                        ...user,
                        messages: [...user.messages, action.payload],
                    };
                } else {
                    return user;
                }
            }),
        }),
    },
});

export const { setUser, updateUserMessages, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
