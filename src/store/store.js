import { configureStore } from '@reduxjs/toolkit'
import createRoutine from './reducers/createRoutine';

const store = configureStore({
  reducer: {
    routine: createRoutine
  },
});

export default store;