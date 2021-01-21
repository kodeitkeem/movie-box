import styles from './HomePage.module.css';
import Header from '../../components/Header';
import MovieRow from '../../components/MovieRow';
import { useState, useEffect } from 'react';

function HomePage(props){


    return (
        <div>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            Homeup Page
        </div>
    )
}

export default HomePage;