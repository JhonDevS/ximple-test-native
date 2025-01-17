import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import creditsReducer from './reducers/creditsReducer';

const store = configureStore({
  reducer: {
    credits: creditsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
