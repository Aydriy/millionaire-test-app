import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import uiReducer from './slices/slice';

const rootReducer = combineReducers({
  uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
