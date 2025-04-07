import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                Welcome to HobiKu
            </h2>
            <p className="font-poppins text-black-700 mb-8">
                Track your favorite games, anime, manga, and more in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
                    <h3 className="font-raleway text-xl font-bold">Games</h3>
                    <p className="font-poppins mt-2">5 Completed, 2 Playing, 3 Plan to Play</p>
                </div>
                <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
                    <h3 className="font-raleway text-xl font-bold">Anime</h3>
                    <p className="font-poppins mt-2">2 Completed, 3 Watching, 7 Plan to Watch</p>
                </div>
                <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
                    <h3 className="font-raleway text-xl font-bold">Manga</h3>
                    <p className="font-poppins mt-2">3 Completed, 1 Reading, 4 Plan to Read</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;