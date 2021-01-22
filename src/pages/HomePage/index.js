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
                <MovieRow title="Now Trending"/>
                <OriginalsRow title="NETFLIX ORIGINALS" />
                <ActionRow title="Action & Adventure" />
                <ComedyRow title="Comedy" />
                <DocumentariesRow title="Documentaries" />
                <FamilyRow title="Family" />
                <RomanceRow title="Romance" />
                <SciFiRow title="Science Fiction" />
            </Container>
        </div>
    )
}

export default HomePage;