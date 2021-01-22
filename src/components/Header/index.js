import { Link } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import styles from './Header.module.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

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
                      </Form>
                      <LinkContainer to="/dashboard">
                        <Nav.Link className={styles.NavLink}>
                          My Profile
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="" onClick={props.handleLogout}>
                        <Nav.Link className={styles.NavLink}>
                            Logout
                        </Nav.Link>
                      </LinkContainer>
                    </>

                    :
                    
                    <>
                      <LinkContainer to="/login">
                        <Nav.Link className={styles.NavLink} >
                          Login
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/signup">
                        <Nav.Link className={styles.NavLink} >
                          Signup
                        </Nav.Link>
                      </LinkContainer>
                    </>
                  
                  }
              </Nav>
            </Navbar>
          </Container>
        </header>
    )
}

export default Header;