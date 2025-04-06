import { configureStore } from '@reduxjs/toolkit';
import trackerReducer from './slices/trackerSlice';

const store = configureStore({
    reducer: {
        tracker: trackerReducer,
    },
});

export default store;