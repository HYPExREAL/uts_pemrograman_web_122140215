import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ItemDetailPage = () => {
    const { id } = useParams();
    const items = useSelector((state) => state.tracker.items);
    const item = items.find((item) => item.id === parseInt(id));

    if (!item) {
        return (
            <div className="min-h-screen bg-white p-8">
                <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                    Item Not Found
                </h2>
                <p className="font-poppins text-gray-700">
                    The item you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-8">
                <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                    {item.title}
                </h2>
            <div className="space-y-4">
                {/* Deskripsi */}
                    <p className="font-poppins text-gray-700">{item.description}</p>
                {/* Kategori */}
            <div>
                <span className="font-poppins text-gray-600">Category:</span>
                <span className="font-poppins ml-2">{item.category}</span>
            </div>
                {/* Status */}
            <div>
            <span className="font-poppins text-gray-600">Status:</span>
            <span className="font-poppins ml-2 capitalize">{item.status}</span>
            </div>
                {/* Tombol Edit */}
                <button className="bg-secondary text-white px-6 py-2 rounded font-poppins hover:bg-primary transition-colors">
                    Edit Item
                </button>
            </div>
        </div>
    );
};

export default ItemDetailPage;