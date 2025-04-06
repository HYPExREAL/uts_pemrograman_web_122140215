import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Daftar item yang ditambahkan oleh pengguna
};

const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = trackerSlice.actions;
export default trackerSlice.reducer;