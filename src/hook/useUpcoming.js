import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcoming = () => {
    return api.get(`/movie/upcoming`)
}

export const useUpcomingQuery = () => {
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:fetchUpcoming,
        select:(result) => result.data
    })
}