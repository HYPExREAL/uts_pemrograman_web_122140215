import React from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ item, onAddToTracker }) => {
    return (
        <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">{item.title || 'No Title'}</h3>
            <p className="text-gray-600">{item.description || 'No Description Available'}</p>
            <button
                className= "bg-secondary text-white px-4 py-2 mt-4 rounded font-poppins hover:bg-white hover:text-primary transition-all duration-300 ease-in-out"
                onClick={onAddToTracker}
                aria-label={`Add ${item.title || 'item'} to tracker`}
            >
                Add to Tracker
            </button>
        </div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
    onAddToTracker: PropTypes.func.isRequired,
};

export default ItemCard;