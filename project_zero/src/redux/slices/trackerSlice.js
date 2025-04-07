import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    games: [],
    anime: [],
    film: [],
    manga: [],
};

const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { category, ...item } = action.payload;
            if (!state[category]) {
                console.error(`Invalid category: ${category}`);
                return;
            }
            state[category].push({ ...item, status: 'plan-to' });
        },
        updateItemStatus: (state, action) => {
            const { id, category, status } = action.payload;
            const items = state[category];
            const itemIndex = items.findIndex((item) => item.id === id);
            if (itemIndex === -1) {
                console.warn(`Item with id ${id} not found in category ${category}`);
                return;
            }
            items[itemIndex].status = status;
        },
        deleteItem: (state, action) => {
            const { id, category } = action.payload;
            state[category] = state[category].filter(item => item.id !== id);
        },
    },
});

// Utility function untuk menghitung status
export const countByStatus = (items) => {
    return {
        completed: items.filter((item) => item.status === 'completed').length,
        ongoing: items.filter((item) => item.status === 'ongoing').length,
        planTo: items.filter((item) => item.status === 'plan-to').length,
    };
};

export const { addItem, updateItemStatus, deleteItem } = trackerSlice.actions;
export default trackerSlice.reducer;