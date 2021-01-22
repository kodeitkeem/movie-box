import { useState } from 'react';
import { login } from '../../services/userService';
import styles from './LoginPage.module.css';
import Form from 'react-bootstrap/Form';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { PrimaryButton } from '../../components/PrimaryButton';
import {Link} from 'react-router-dom';



function LoginPage(props){
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState(){
        return {
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
            await login(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
            
            props.history.push('/home');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
        <div className={styles.Background}>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Container>
                <div className={styles.FormContainer}>
                    <h2>Have an account already?</h2>
                    <h5>Lets get you signed in. . .</h5>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label className={styles.FormLabel}>Email address</Form.Label>
                            <Form.Control className={styles.FormControl} value={formState.email} onChange={handleChange} placeholder="Enter your email" name="email" type="email"/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className={styles.FormLabel}>Password</Form.Label>
                            <Form.Control className={styles.FormControl} value={formState.password} onChange={handleChange} placeholder="Enter your password" name="password" type="password"/>
                        </Form.Group>
                        <button className={styles.Btn}>Login</button>
                    </Form>
                    <p>Dont have an account?</p>
                   
                    <PrimaryButton />
                    
                </div>
            </Container>
        </div>
        </>
    )
}

export default LoginPage;