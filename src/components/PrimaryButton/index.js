import Button from 'react-bootstrap/Button';
import styles from './PrimaryButton.module.css';
import { Link } from 'react-router-dom';

export function PrimaryButton(props){
    return (
        <Link to="/signup">
        <Button className={styles.Btn} size="lg">
             Subscribe Today
        </Button>
        </Link>
    )
}
