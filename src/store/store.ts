import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import application_theme from '../slices/themeSlice/themeSlice';
import language from '../slices/languageSlice/languageSlice';
import user from '../slices/userSlice/userSlice';
import board from '../slices/boardSlice/boardSlice';

export const store = configureStore({
  reducer: { application_theme, language, board, user },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
