import logo from '../../../src/logo.svg';
import styles from './Header.module.css';

 function Header(props) {
    return (
        <header className={styles.Header}>
          <img src={logo} className={styles.Logo} alt="logo" />
          <nav>
            <ul>
              <li>Login</li>
              <li>Logout</li>
              <li>Signup</li>
              <li>My Profile</li>
            </ul>
          </nav>
        </header>
    )
}

export default Header;