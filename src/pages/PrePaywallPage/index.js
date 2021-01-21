import styles from './PrePaywallPage.module.css';
import Header from '../../components/Header';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { PrimaryButton } from '../../components/PrimaryButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


function PrePaywallPage(props){

    const CardInfo = [
        {   id: 1,
            question: "What is Movie Box?",
            answer: "The dollar menu Netflix"
        },
        {
            id: 2,
            question: "Isn't there already a Movie Box App?",
            answer: "No that one is dead and I'm here now, get over it!!"
        },
        {
            id: 3,
            question: "How much does Movie Box cost?",
            answer: "We only do yearly subscriptions for $1000/yr"
        },
        {
            id: 4,
            question: "How do I cancel my subscription?",
            answer: "We're so sorry but there's no such option"
        }

    ]

    return (
        <>
            <div className={styles.Background}>
            <Header handleLogout={props.handleLogout} user={props.user}/>
            <Jumbotron className={styles.Jumbotron}>
                <h1>It's not about what you watch... <br /> it's about how you watch</h1>
                <p>Watch anytime, anywhere.. but you can never cancel sorry </p>
                <PrimaryButton /> 
            </Jumbotron>
            </div>
            <div>
                <Container className={styles.Faqs}>
                    <h2>Dont know why you'd ask but..</h2>
                    <h3>Here are some FAQs</h3>
                    <Accordion defaultActiveKey="0" className={styles.Accordion}>
                        {CardInfo.map((question, idx)=> (
                            <Card className={styles.Card} key={idx}>
                                <Accordion.Toggle className={styles.CardHeader} as={Card.Header} eventKey={question.id}>
                                {question.question}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={question.id} >
                                <Card.Body >{question.answer}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Container>
            </div>

        </>
    )
}

export default PrePaywallPage;