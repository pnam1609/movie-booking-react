import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../container/Admin/User/userSplice'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
