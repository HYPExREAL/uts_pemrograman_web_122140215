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
    },
});

export const { addItem } = trackerSlice.actions;
export default trackerSlice.reducer;