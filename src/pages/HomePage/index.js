import styles from './HomePage.module.css';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import MovieRow from '../../components/MovieRow';
import OriginalsRow from '../../components/OriginalsRow';

function HomePage(props){

    return (
        <div>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Container >
                <MovieRow title="Now Trending"/>
                <OriginalsRow title="NETFLIX ORIGINALS" />
            </Container>
            
        </div>
    )
}

export default HomePage;