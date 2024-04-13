import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

///discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.asc&page=1&with_keywords=marble

const fetchMovieDiscover=({page, sort})=>{
    return api.get(`/discover/movie?page=${page}&sort_by=${sort}`);
}

export const useMovieDiscoverQuery = ({page, sort}) => {
    return useQuery({
        queryKey:['movie-discover', {page, sort}],
        queryFn:() => fetchMovieDiscover({page, sort}),
        select:(result)=>result.data,
    })
}