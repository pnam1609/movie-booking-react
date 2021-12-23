import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../container/Admin/User/userSplice';
import movieListReducer from '../container/Client/Home/module/movieListSlice';
import movieTicketReducer from '../container/Client/Home/components/FilterBox/module/filterBoxSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movieList: movieListReducer,
    movieTicket: movieTicketReducer
  },
});
