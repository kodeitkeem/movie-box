import { getAction } from '../../services/net-api';
import MovieCard from '../../components/MovieCard';
import styles from '../../components/MovieRow/MovieRow.module.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import {Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MovieDetailPage from '../../pages/MovieDetailPage';

function ActionRow(props) {

    
    const [movieData, setMovieData ] = useState({
        page: 1,
        results: []
    });


  async function getMovieData(){
    const data = await getAction();
    setMovieData(data);
    console.log(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  

  return (
      <>
      
        <Row className={styles.Row}>
            <h2>{props.title}</h2>
        </Row>
        <Row className={styles.MoviesRow}>
                {movieData.results.map((movie, idx) => (
                        <Col md={2} key={idx}>
                            <Link  to={`/movie/${movie.id}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        </Col>
                ))}
        </Row>
             
    </>
  )

}

export default ActionRow;