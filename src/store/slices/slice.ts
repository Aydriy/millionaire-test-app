import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResult } from './types';

const initialState: IResult = {
  level: 0,
  money: 0,
};

export const uiReducer = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setResultState(
      state: IResult,
      action: PayloadAction<{
        level: number;
        money: number;
      }>
    ) {
      const { level, money } = action.payload;
      state.level = level;
      state.money = money;
    },
  },
});

export const { setResultState } = uiReducer.actions;

export default uiReducer.reducer;
