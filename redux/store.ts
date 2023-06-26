"use client"
import React from 'react'
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "@/redux/features/auth-slice"
// import { useAppSelector } from "@/redux/store"
import { type } from 'os';

export const store = configureStore({
    reducer: {
        authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useAppSelector;