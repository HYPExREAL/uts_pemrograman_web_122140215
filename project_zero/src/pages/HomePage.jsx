import React from 'react';
import { useSelector } from 'react-redux';

const Homepage = () => {
    const games = useSelector((state) => state.tracker.games);
    const anime = useSelector((state) => state.tracker.anime);
    const film = useSelector((state) => state.tracker.film); // Mengambil data film dari Redux
    const manga = useSelector((state) => state.tracker.manga);

    // Fungsi untuk menghitung jumlah item berdasarkan status
    const countByStatus = (items) => {
        return {
            completed: items.filter((item) => item.status === 'completed').length,
            ongoing: items.filter((item) => item.status === 'ongoing').length,
            planTo: items.filter((item) => item.status === 'plan-to').length,
        };
    };

    // Menghitung status untuk setiap kategori
    const gamesCount = countByStatus(games);
    const animeCount = countByStatus(anime);
    const filmCount = countByStatus(film); // Menghitung status untuk film
    const mangaCount = countByStatus(manga);

    // Komponen kartu untuk menampilkan ringkasan
    const SummaryCard = ({ title, completed, ongoing, planTo }) => {
        return (
            <div className="bg-secondary text-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold">{title}</h3>
                <p>{`${completed} Completed, ${ongoing} Ongoing, ${planTo} Plan to`}</p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">Welcome to HobiKu</h2>
            <p>Track your favorite games, anime, manga, and more in one place.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {/* Kartu untuk Games */}
                {games.length === 0 ? (
                    <p>No games added yet.</p>
                ) : (
                    <SummaryCard
                        title="Games"
                        completed={gamesCount.completed}
                        ongoing={gamesCount.ongoing}
                        planTo={gamesCount.planTo}
                    />
                )}

                {/* Kartu untuk Anime */}
                {anime.length === 0 ? (
                    <p>No anime added yet.</p>
                ) : (
                    <SummaryCard
                        title="Anime"
                        completed={animeCount.completed}
                        ongoing={animeCount.ongoing}
                        planTo={animeCount.planTo}
                    />
                )}

                {/* Kartu untuk Film */}
                {film.length === 0 ? (
                    <p>No films added yet.</p>
                ) : (
                    <SummaryCard
                        title="Film"
                        completed={filmCount.completed}
                        ongoing={filmCount.ongoing}
                        planTo={filmCount.planTo}
                    />
                )}

                {/* Kartu untuk Manga */}
                {manga.length === 0 ? (
                    <p>No manga added yet.</p>
                ) : (
                    <SummaryCard
                        title="Manga"
                        completed={mangaCount.completed}
                        ongoing={mangaCount.ongoing}
                        planTo={mangaCount.planTo}
                    />
                )}
            </div>
        </div>
    );
};

export default Homepage;