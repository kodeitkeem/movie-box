const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const endpoints = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}

export function getMovieEndpoint(){
    return fetch(BASE_URL + endpoints.getTrending).then(res => res.json()).catch(err => {
        console.log(err)
    });
}
