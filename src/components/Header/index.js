import { Link } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import styles from './Header.module.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

 function Header(props) {
    return (
        <header className={styles.Header}>
          <Container>
            <Navbar className={styles.Navbar}>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} className={styles.Logo} alt="logo" />
                </Link>
              </Navbar.Brand>
              <Nav className="ml-auto">
                  {
                    props.user ? 
                    <>
                      <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info"><i class="fas fa-search"></i>Search</Button>
                      </Form>
                      <Nav.Link to="/dashboard">
                          My Profile
                      </Nav.Link>
                      <Nav.Link to="" onClick={props.handleLogout}>
                          Logout
                      </Nav.Link>
                    </>
                    :
                    <>
                      <Nav.Link className={styles.NavLink} to="/login">
                        Login
                      </Nav.Link>
                      <Nav.Link className={styles.NavLink} to="/signup">
                        Signup
                      </Nav.Link>
                    </>
                  }
              </Nav>
            </Navbar>
          </Container>
        </header>
    )
}

export default Header;