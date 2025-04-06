import React from 'react';
import useFetch from '../hooks/useFetch';
import ItemCard from '../components/ItemCard';

const ItemListPage = () => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) return <p className="text-primary">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                All Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemListPage;