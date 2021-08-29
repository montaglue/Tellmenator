import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
//import styles from "./style.module.css";
import './style.css';

const Login = () => {
    return <>
        <div className="container">
            <form className="box">
                <h1 className="form-header">Login</h1>
                <input className="form-text-field" type="text" name="" value="" placeholder="Username" />
                <input className="form-text-field" type="password" name="" value="" placeholder="Password" />
                <input className="form-submit" type="submit" name="" value="Login" />

            </form>
        </div>
    </>;
}

/*
const Login = ({ processLogin, hasFailedLoginAttempts }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const onLoginClicked = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (event.currentTarget.checkValidity()) {
            //const hash = generateUserHash(name, dateOfBirth, password);
            await processLogin(true, null);
        }
    };

    return (
        <>
            <div className={`${styles['login-container']}`}>
                <Card className={`${styles['login-card']}`}>
                    <Card.Body>
                        <Form className={`${styles['form']}`} onSubmit={async (e) => onLoginClicked(e)} validated={validated}>
                            <Form.Label className={`${styles['label']}`}>Email</Form.Label>
                            <Form.Control
                                className={`${styles['input']}`}
                                type="text"
                                onChange={e => setName(e.target.value)}
                                required
                            />


                            <Form.Label className={`${styles['label']}`}>
                                Password
                            </Form.Label>
                            <Form.Control
                                className={`${styles['input']}`}
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />

                            <Button
                                className={`${styles['login-button']}`}
                                type="submit"
                                variant="success"
                                block
                            >
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
*/
export default Login;