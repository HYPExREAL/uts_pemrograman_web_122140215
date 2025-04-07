import React from 'react';

const ItemCard = ({ item, onAddToTracker }) => {
    return (
        <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <button
                className="bg-secondary text-white px-4 py-2 mt-4 rounded font-poppins hover:bg-primary transition-colors"
                onClick={onAddToTracker}
            >
                Add to Tracker
            </button>
        </div>
    );
};

export default ItemCard;