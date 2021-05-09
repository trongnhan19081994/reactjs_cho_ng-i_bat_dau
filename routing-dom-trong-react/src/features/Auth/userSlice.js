import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //Call API to register
        const data = await userApi.register(payload);

        //Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

        //return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //Call API to login
        const data = await userApi.login(payload);

        //Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

        //return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: {
        //user/register/fulfilled
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const { reducer } = userSlice;
export default reducer; //default export