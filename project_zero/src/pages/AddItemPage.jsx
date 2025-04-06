import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/trackerSlice';
import { useNavigate } from 'react-router-dom';

const AddItemPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  // State lokal untuk mengelola input form
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        status: 'plan-to-watch',
    });

  // Handler untuk mengupdate state saat input berubah
    const handleChange = (e) => {
        const { name, value } = e.target;
                setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  // Handler untuk submit form
    const handleSubmit = (e) => {
        e.preventDefault();

    // Validasi input
        if (!formData.title || !formData.category) {
            alert('Judul dan kategori harus diisi!');
        return;
    }

    // Generate ID unik untuk item baru
    const newItem = {
        id: Date.now(), // ID sementara menggunakan timestamp
        title: formData.title,
        description: formData.description,
        category: formData.category,
        status: formData.status,
    };

    // Dispatch action Redux untuk menambahkan item ke state global
    dispatch(addItem(newItem));

    // Reset form
    setFormData({
        title: '',
        description: '',
        category: '',
        status: 'plan-to-watch',
    });
    // Navigasi kembali ke halaman utama atau daftar item
    navigate('/items');
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                Add New Item
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Judul */}
            <div>
                <label htmlFor="title" className="block font-poppins text-gray-700">
                    Title
                </label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Enter item title"
                required
            />
            </div>

            {/* Input Deskripsi */}
            <div>
                <label htmlFor="description" className="block font-poppins text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    placeholder="Enter item description"
                ></textarea>
            </div>

            {/* Input Kategori */}
            <div>
                <label htmlFor="category" className="block font-poppins text-gray-700">
                    Category
                </label>
            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                required
            >
                <option value="">Select a category</option>
                <option value="game">Game</option>
                <option value="anime">Anime</option>
                <option value="manga">Manga</option>
                <option value="manhwa">Manhwa</option>
                <option value="film">Film</option>
                <option value="series">Series</option>
            </select>
            </div>

            {/* Input Status */}
            <div>
                <label htmlFor="status" className="block font-poppins text-gray-700">
                    Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                    <option value="plan-to-watch">Plan to Watch/Play</option>
                    <option value="watching">Watching/Playing</option>
                    <option value="completed">Completed</option>
                    <option value="backlog">Backlog</option>
                </select>
        </div>

        {/* Tombol Submit */}
        <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded font-poppins hover:bg-primary transition-colors"
        >
            Add Item
        </button>
        </form>
    </div>
    );
};

export default AddItemPage;