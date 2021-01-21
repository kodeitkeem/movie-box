import styles from './HomePage.module.css';
import Header from '../../components/Header';
import MovieRow from '../../components/MovieRow';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function HomePage(props){


    return (
        <div>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Container >
                <MovieRow title="TRENDING"/>
            </Container>
            
        </div>
    )
}

export default HomePage;