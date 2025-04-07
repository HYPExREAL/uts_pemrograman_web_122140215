import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://67f3dfe2cbef97f40d2c77d5.mockapi.io/HobiKu', // Pastikan URL benar // Ganti dengan base URL API yang digunakan
    timeout: 10000, // Timeout 10 detik
});

export default apiClient;