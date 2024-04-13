import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieSimilar = ({id, page}) => {
    return api.get(`/movie/${id}/similar?language=ko-KR&page=${page}`);
}

export const useMovieSimilarQuery = ({id, page}) => {
    return useQuery({
        queryKey:['movie-similar',{id, page}],
        queryFn:() => fetchMovieSimilar({id, page}),
        select:(result) => result.data,
    })
}