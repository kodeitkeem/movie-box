import styles from './Footer.module.css';
import Container from 'react-bootstrap/Container';


 function Footer(props) {
    return (
        <Container>
            <footer className={styles.Footer}>
                <p>Copyright &copy; All right reserved. Movie Box {new Date().getFullYear()}</p>
            </footer>
        </Container>
    )
}

export default Footer;