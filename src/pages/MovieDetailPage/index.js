import { getGenres, getCredits } from '../../services/net-api';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import  styles from '../MovieDetailPage/MovieDetailPage.module.css';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';

function convertTime(num){
    const hrs = Math.floor(num/60);
    const mins = num % 60;
    return hrs + ":" + mins;
}


 function MovieDetailPage(props){

    const BASE_URL = "https://image.tmdb.org/t/p/original";
     
    const movieId = window.location.pathname.split('/')[2];

    const [movieCredit, setMovieCredit] = useState({
        cast: []
    });
    
    
    const [movieData, setMovieData ] = useState({
        page: 1,
        movie: {}
    });

    const imageUrl = `${BASE_URL}${movieData.movie.backdrop_path}` || `${BASE_URL}${movieData.movie.poster_path}`;

   

  

function movieMember(num){
    return movieCredit.cast.cast && movieCredit.cast.cast.slice(0, 4)[num].name
}

const releaseDate = movieData.movie.release_date && movieData.movie.release_date.substr(0, 4);


const duration = convertTime(movieData.movie.runtime);

  useEffect(() => {
    async function getMovieData(){
        const data = await getGenres(movieId);
        setMovieData({movie: data});
        console.log(data);
      }
    getMovieData();
  }, [movieId]);

  useEffect(()=>{
    async function getMovieCredits(){
        const credit = await getCredits(movieId);
        setMovieCredit({cast: credit});
        console.log(credit);
    }
      getMovieCredits()
  }, [movieId]);


    return (
        <div className={styles.DetailContent} style={{backgroundImage: `linear-gradient(to left, rgba(233, 234, 200, 0), rgb(0, 0, 0, .8), rgb(0, 0, 0, 1)), url(${imageUrl})`, backgroundRepeat: 'no-repeat', height: '100vh', backgroundPosition: 'center', backgroundSize: '100% 100%' }}>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Container>
                <Row className={styles.Heading}>
                    <Col>
                        <h1>{movieData.movie.title}</h1>
                    </Col>
                </Row>
                
                <Row className={styles.GenreDuration}>
                    <Col md={12}>
                        <Row>
                            <Col>
                                {movieData.movie.genres && movieData.movie.genres.map((genre, idx) => (
                                    <span className={styles.GenreList} key={idx}>{genre.name}</span>
                                ))}
                                <span style={styles.Divider}></span>&nbsp;
                                <span className={styles.GenreList}>|&nbsp;&nbsp;{releaseDate}&nbsp;&nbsp;|</span>
                                &nbsp;<span className={styles.GenreList}>{duration}m</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className={styles.Imdb}><i class="fab fa-imdb"></i>&nbsp;:</span>
                                &nbsp;<span className={styles.Rating}>{movieData.movie.vote_average}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={styles.MovieOverview}>
                        <div>
                            <p>{movieData.movie.overview}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={4}  className={styles.Center}>
                                <span className={styles.Play}><Link to="#"><i class="fas fa-play-circle"></i></Link></span> <span className={styles.PlayWord}>PLAY MOVIE</span>
                            </Col>
                            <Col md={4} className={styles.Center}>
                                <span className={styles.PlayWord}>WATCH TRAILER</span>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col>
                            <p className={styles.Starring}><span className={styles.Dull}>Starring:</span> {movieMember(0)},&nbsp;{movieMember(1)},&nbsp;{movieMember(2)},&nbsp;{movieMember(3)}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MovieDetailPage;