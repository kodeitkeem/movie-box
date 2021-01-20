import Button from 'react-bootstrap/Button';
import styles from './PrimaryButton.module.css';
import { Link } from 'react-router-dom';

export function PrimaryButton(props){
    return (
        <Button className={styles.Btn} size="lg">
            <Link to="/signup">
             Subscribe Today
            </Link>
        </Button>
    )
}
