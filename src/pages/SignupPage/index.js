import { useState } from 'react';
import { signup } from '../../services/userService';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../pages/LoginPage/LoginPage.module.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function SignupPage(props){

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState(){
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    function handleChange(event){
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event){
        try {
            event.preventDefault();
            console.log('submitted form data: ', formState)
            await signup(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
            
            props.history.push('/home');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className={styles.Background}>
            <Header handleLogout={props.handleLogout} user={props.user}/>
                <Container>
                    <div className={styles.FormContainer}>
                        <h2>You're just one step away!</h2>
                        <h5>Subscribe today and recieve 2% off</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={styles.FormLabel}>First Name</Form.Label>
                                        <Form.Control className={styles.FormControl} value={formState.firstName} onChange={handleChange} placeholder="Enter your first name" name="firstName" type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className={styles.FormLabel}>Last Name</Form.Label>
                                        <Form.Control className={styles.FormControl} value={formState.lastName} onChange={handleChange} placeholder="Enter your last name" name="lastName" type="text"/>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label className={styles.FormLabel}>Email</Form.Label>
                                <Form.Control className={styles.FormControl} value={formState.email} onChange={handleChange} placeholder="Enter a valid email address" name="email" type="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className={styles.FormLabel}>Password</Form.Label>
                                <Form.Control className={styles.FormControl} value={formState.password} onChange={handleChange} placeholder="Enter a strong passwrod" name="password" type="password"/>
                            </Form.Group>
                            <button className={styles.Btn}>Subscribe</button>
                        </Form>
                        <p>Already have an account?</p>
                        <Link to="/login">
                            <button className={styles.LoginBtn}>
                                Login
                            </button>
                        </Link>
                    </div>
                </Container>
        </div>
    )
}

export default SignupPage;