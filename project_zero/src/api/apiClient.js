import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Ganti dengan base URL API yang digunakan
    timeout: 10000, // Timeout 10 detik
});

export default apiClient;