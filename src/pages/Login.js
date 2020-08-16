import React, {useState, useContext} from 'react'
import {useHistory, Link} from "react-router-dom"
import UserContext from "../Context";
import authenticate from "../utils/authenticate";
import actionLogo from "../assets/images/reacto-transparent.png";
import {Form, FormGroup, Button, Alert} from "reactstrap";
import InputComponent from "../components/InputComponent";
import ReactoSpinner from "../components/ReactoSpinner";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        await authenticate('http://localhost:9999/api/user/login', {
                username,
                password
            }, (user) => {
                setIsLoading(false);
                context.logIn(user);
            history.push('/dashboard');
            }, (e) => {
                setIsLoading(false);
                setError(true);
                console.log('Error', e)
            }
        )
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
                                <h2>Login</h2>
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
                                    <FormGroup className="pt-3">
                                        <Button
                                            color="action"
                                            className="text-light btn-block custom-rounded"
                                            type="submit"
                                        >Go to your ReactO</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                        <div className="login-footer">
                            <Link exact to="/demo">
                                <u>...or CHECK THE DEMO AND REGISTER</u>
                                <i className="fa fa-arrow-right ml-3"></i>
                            </Link>
                        </div>
                        {
                            error && <div className="login-footer">
                                <Alert color="warning">Wrong credentials!</Alert>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Login;