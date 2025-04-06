import React from 'react';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">
                Your Profile
            </h2>
            <p className="font-poppins text-black-700 mb-8">
                Here's a summary of your tracked hobby:
            </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-xl font-bold">Games</h3>
                <p className="font-poppins mt-2">5 Completed, 2 Playing, 3 Backlog</p>
            </div>
            <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-xl font-bold">Anime</h3>
                <p className="font-poppins mt-2">3 Watching, 7 Plan to Watch</p>
            </div>
        </div>
    </div>
    );
};

export default ProfilePage;