import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import actionLogo from "../assets/images/reacto-transparent.png";

const Register = () => {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">
                    <img src={actionLogo} alt="Action Logo"/>
                </div>
                <div className="login-form">
                    <div className="login-form-header">
                        <h2>Register</h2>
                    </div>
                    <div className="login-form-body">
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="loginUsername"
                                    className="custom-rounded"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password"
                                       name="password"
                                       id="loginPassword"
                                       className="custom-rounded"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="rePassword">Re - Password</Label>
                                <Input type="password"
                                       name="rePassword"
                                       id="rePassword"
                                       className="custom-rounded"/>
                            </FormGroup>
                            <FormGroup className="pt-3">
                                <Button color="action" className="text-light btn-block custom-rounded">Go!</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;