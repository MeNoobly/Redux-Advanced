import { IUser } from './../../types/IUser';
import axios from 'axios';
import { AppDispatch } from './../store';
import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsersDefault = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFething());
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
//         dispatch(userSlice.actions.usersFethingSuccess(response.data))
//     } catch (error) {
//         if (error instanceof Error) {
//             dispatch(userSlice.actions.usersFethingError(error.message));
//         }
//     }
// }

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("http://localhost:5000");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)