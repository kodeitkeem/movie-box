import { Link } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import styles from './Header.module.css';

 function Header(props) {
    return (
        <header className={styles.Header}>
          <Link to="/">
            <img src={logo} className={styles.Logo} alt="logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="">
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  My Profile
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Header;