import PropTypes from 'prop-types';

const ItemCard = ({ item }) => {
    return (
        <div className="border border-primary rounded-lg shadow-md p-4">
            <h3 className="font-raleway text-xl font-bold text-primary">{item.title}</h3>
            <p className="font-poppins text-black-700 mt-2">{item.description}</p>
            <button className="mt-4 bg-secondary text-white px-4 py-2 rounded font-poppins">
                Add to Tracker
            </button>
        </div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemCard;