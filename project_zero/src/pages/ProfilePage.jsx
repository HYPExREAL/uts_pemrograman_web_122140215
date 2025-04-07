import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemStatus, deleteItem } from '../redux/slices/trackerSlice';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.tracker.games);
    const anime = useSelector((state) => state.tracker.anime);
    const film = useSelector((state) => state.tracker.film);
    const manga = useSelector((state) => state.tracker.manga);

    const countByStatus = (items) => {
        return {
            completed: items.filter((item) => item.status === 'completed').length,
            ongoing: items.filter((item) => item.status === 'ongoing').length,
            planTo: items.filter((item) => item.status === 'plan-to').length,
        };
    };

    const SummaryCard = ({ title, items, category }) => {
        const count = countByStatus(items);

        return (
            <div className="bg-secondary text-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold">{title}</h3>
                <p>{`${count.completed} Completed, ${count.ongoing} Ongoing, ${count.planTo} Plan to`}</p>

                {items.length > 0 ? (
                    <ul className="mt-4">
                        {items.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-2">
                                <span>{item.title}</span>
                                <div>
                                    <select
                                        value={item.status}
                                        onChange={(e) =>
                                            dispatch(
                                                updateItemStatus({ id: item.id, category, status: e.target.value })
                                            )
                                        }
                                        className="border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value="plan-to">Plan to</option>
                                        <option value="ongoing">On Going</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                    <button
                                        onClick={() => dispatch(deleteItem({ id: item.id, category }))}
                                        className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No {title.toLowerCase()} added yet.</p>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <h2 className="font-raleway text-3xl font-bold text-primary mb-6">Your Space</h2>
            <p>Here's a summary of your tracked hobby :</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <SummaryCard title="Games" items={games} category="games" />
                <SummaryCard title="Anime" items={anime} category="anime" />
                <SummaryCard title="Film" items={film} category="film" />
                <SummaryCard title="Manga" items={manga} category="manga" />
            </div>
        </div>
    );
};

export default ProfilePage;