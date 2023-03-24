import { fetchUsers } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../types/IUser';

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // usersFething(state) {
        //     state.isLoading = true;
        // },

        // usersFethingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = "";
        //     state.users = action.payload;
        // },

        // usersFethingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default userSlice.reducer;