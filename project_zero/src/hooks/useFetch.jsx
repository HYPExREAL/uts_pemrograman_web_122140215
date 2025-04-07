import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Validasi URL
        if (!url) {
            setError('Invalid URL');
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url, { signal });

                // Validasi status response
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Validasi content type
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Response is not valid JSON');
                }

                const responseData = await response.json();

                // Validasi data kosong
                if (!responseData) {
                    throw new Error('No data available');
                }

                setData(responseData);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.toString() || 'An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;