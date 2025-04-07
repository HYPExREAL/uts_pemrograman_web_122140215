import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div
            className="min-h-screen bg-white flex items-center justify-center p-4"
            role="alert"
            aria-label="Page not found"
        >
            <div className="text-center">
                <h1 className="font-raleway text-4xl font-bold text-primary">404</h1>
                <p className="font-poppins text-gray-700 mt-4">Page not found.</p>
                <Link
                    to="/"
                    className="bg-primary text-white px-4 py-2 mt-6 rounded inline-block hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;