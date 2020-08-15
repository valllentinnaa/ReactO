import React, {useContext, useState} from 'react';
import authenticate from '../utils/authenticate';
import UserContext from '../Context';
import actionLogo from "../assets/images/reacto-transparent.png";
import {Button, Form, FormGroup, Alert} from "reactstrap";
import InputComponent from "../components/InputComponent";
import {useHistory} from "react-router-dom";
import ReactoSpinner from "../components/ReactoSpinner";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (password === rePassword) {
            await authenticate('http://localhost:9999/api/user/register', {
                    username,
                    password
                }, (user) => {
                    setIsLoading(false);
                    context.logIn(user);
                    history.push('/dashboard');
                }, (e) => {
                    setIsLoading(false);
                    console.log('Error', e)
                }
            )
        } else {
            setError(true);
        }
    };

    return (
        <>
            {
                isLoading ? <ReactoSpinner/> : <div className="login">
                    <div className="login-container">
                        <div className="login-header">
                            <img src={actionLogo} alt="Action Logo"/>
                        </div>
                        <div className="login-form">
                            <div className="login-form-header">
                                <h2>Register</h2>
                            </div>
                            <div className="login-form-body">
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <InputComponent
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            label="Username"
                                            id="username"
                                            className="custom-rounded"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <InputComponent
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            label="Password"
                                            id="password"
                                            className="custom-rounded"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <InputComponent
                                            type="password"
                                            value={rePassword}
                                            onChange={e => setRePassword(e.target.value)}
                                            label="Re-Password"
                                            id="re-password"
                                            className="custom-rounded"
                                        />
                                    </FormGroup>
                                    <FormGroup className="pt-3">
                                        <Button
                                            color="action"
                                            className="text-light btn-block custom-rounded"
                                            type="submit"
                                        >Start</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                        {
                            error && <div className="login-footer">
                                <Alert color="warning">Passwords must match!</Alert>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Register;