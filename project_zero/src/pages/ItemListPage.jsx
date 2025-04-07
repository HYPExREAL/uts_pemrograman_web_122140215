import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ItemCard from '../components/ItemCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/trackerSlice';

const ItemListPage = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Fetch data dari API
    const { data: gameData, loading: gameLoading, error: gameError } = useFetch('https://api.rawg.io/api/games?key=c41a9beb749c46d9b69c655555e58e8e');
    const { data: animeData, loading: animeLoading, error: animeError } = useFetch('https://api.jikan.moe/v4/anime');
    const { data: filmData, loading: filmLoading, error: filmError } = useFetch('http://www.omdbapi.com/?s=action&apikey=987fb4bb');
    const { data: mangaData, loading: mangaLoading, error: mangaError } = useFetch('https://api.jikan.moe/v4/manga');

    // Gabungkan semua data ke dalam satu array
    const allItems = [
        ...(gameData?.results || []).map(item => ({
            id: item.id,
            title: item.name || 'No Title',
            description: item.description_raw || 'No Description',
            genre: item.genres?.map(g => g.name).join(', ') || 'Unknown',
            releaseyear: item.released || 'Unknown',
            image: item.background_image || 'https://via.placeholder.com/150',
            category: 'game',
        })),
        ...(animeData?.data || []).map(item => ({
            id: item.mal_id,
            title: item.title || 'No Title',
            description: 'No Description',
            genre: item.genres?.map(g => g.name).join(', ') || 'Unknown',
            releaseyear: item.year || 'Unknown',
            image: item.images?.jpg?.large_image_url || 'https://via.placeholder.com/150',
            category: 'anime',
        })),
        ...(filmData?.Search || []).map(item => ({
            id: item.imdbID,
            title: item.Title || 'No Title',
            description: item.Plot || 'No Description',
            genre: item.Genre || 'Unknown',
            releaseyear: item.Year || 'Unknown',
            image: item.Poster || 'https://via.placeholder.com/150',
            category: 'film',
        })),
        ...(mangaData?.data || []).map(item => ({
            id: item.mal_id,
            title: item.title || 'No Title',
            description: 'No Description',
            genre: item.genres?.map(g => g.name).join(', ') || 'Unknown',
            releaseyear: item.year || 'Unknown',
            image: item.images?.jpg?.large_image_url || 'https://via.placeholder.com/150',
            category: 'manga',
        })),
    ].filter(Boolean); // Hanya menyertakan data yang valid

    // Filter data berdasarkan kategori yang dipilih
    const filteredItems = selectedCategory
        ? allItems.filter(item => item.category === selectedCategory)
        : allItems;

    // Handle loading state
    if (gameLoading || animeLoading || filmLoading || mangaLoading) {
        return <p className="flex text-3xl font-bold py-50 items-center justify-center text-primary">Loading...</p>;
    }

    // Handle error state
    if (gameError || animeError || filmError || mangaError) {
        return <p className="text-red-500">Error: Unable to fetch data</p>;
    }

    // Handle empty data
    if (!allItems.length) {
        return <p className="text-center text-gray-600">No items available.</p>;
    }

    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">All Items</h2>

            {/* Dropdown untuk memilih kategori */}
            <div className="mb-4">
                <label htmlFor="category" className="block font-raleway text-black">
                    Select Category :
                </label>
                <select
                    id="category"
                    name="category"
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full px-2 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                    <option value="">All Categories</option>
                    <option value="game">Games</option>
                    <option value="anime">Anime</option>
                    <option value="film">Film</option>
                    <option value="manga">Manga</option>
                </select>
            </div>

            {/* Daftar item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onAddToTracker={() => dispatch(addItem(item))}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListPage;