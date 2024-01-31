import {configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/productslice"
import authslice from '../features/authslice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authslice,

    },
    middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(thunk),
})
