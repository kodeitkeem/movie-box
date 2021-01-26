import styles from './HomePage.module.css';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import MovieRow from '../../components/MovieRow';
import OriginalsRow from '../../components/OriginalsRow';
import ActionRow from '../../components/ActionRow';
import ComedyRow from '../../components/ComedyRow';
import DocumentariesRow from '../../components/DocumentariesRow';
import FamilyRow from '../../components/FamilyRow';
import RomanceRow from '../../components/RomanceRow';
import SciFiRow from '../../components/SciFiRow';

function HomePage(props){

    return (
        <div className={styles.Background}>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Container >
                <MovieRow title="Now Trending" />
                <ActionRow title="Action & Adventure" handleLogout={props.handleLogout} user={props.user} />
                <ComedyRow title="Comedy" />
                <DocumentariesRow title="Documentaries" />
                <FamilyRow title="Family" />
                <SciFiRow title="Science Fiction" />
                <OriginalsRow title="MOVIEBOX ORIGINALS" />
            </Container>
        </div>
    )
}

export default HomePage;