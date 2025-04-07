import { configureStore } from '@reduxjs/toolkit';
import trackerReducer from './slices/trackerSlice';

// Konfigurasi store dengan Redux Toolkit
const store = configureStore({
    reducer: {
        tracker: trackerReducer, // Reducer untuk state global aplikasi
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Nonaktifkan pengecekan serialisasi jika diperlukan
        }),
});

// Ekspor store untuk digunakan di aplikasi
export default store;