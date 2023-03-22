import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../types/IUser';

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
    count: number;
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null,
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
});

export default userSlice.reducer;