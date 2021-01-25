import { getGenres } from '../../services/net-api';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

 function MovieDetailPage(props){

    const movieId = window.location.pathname.split('/')[2];
    
    
    const [movieData, setMovieData ] = useState({
        page: 1,
        movie: {}
    });


  async function getMovieData(){
    const data = await getGenres(movieId);
    setMovieData({movie: data});
    console.log(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);


    return (
        <div className={styles.Background}>
            <Container>
            <h2>{movieData.movie.title}</h2>
            </Container>
        </div>
    )
}

export default MovieDetailPage;