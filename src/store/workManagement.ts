import { useState } from 'react';
import {getSearchResults} from '../remote/workManagement';

export const WorkManagement = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSearch = async (type: string) => {
        let query = ''
        setIsLoading(true);
        setError(null);

        try {
            const results = await getSearchResults(query, type);
            setSearchResults(results);

        } catch (err) {
            setError(err instanceof Error ? err.message : '알 수 없는 오류');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        searchQuery,
        setSearchQuery,
        searchResults,
        isLoading,
        error,
        fetchSearch,
    };
};
