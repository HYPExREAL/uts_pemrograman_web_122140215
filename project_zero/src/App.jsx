import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ItemListPage from './pages/ItemListPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto px-2 py-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;