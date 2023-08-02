const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    getTrending: `/trending/movie/day?api_key=${API_KEY}`,
    getTrendingTv: `/trending/tv/day?api_key=${API_KEY}`,
    getNetflixOrignal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getPopular: `/discover/tv?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    getTopRated: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=36`
}

export default requests

// **************