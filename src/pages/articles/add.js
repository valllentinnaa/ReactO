import React, {useState, useReducer} from 'react'
import getCookie from '../../utils/cookie'
import Articles from "./index";
import {Alert, Button, Form, FormGroup} from "reactstrap";
import InputComponent from "../../components/InputComponent";
import ReactoSpinner from "../../components/ReactoSpinner";
import Container from "../../components/Container";
import PageLayout from "../../components/page-layout";

const initialState = {
    name: '',
    description: '',
    imageUrl: ''
};

const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const AddArticle = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(false);
        const [state, dispatch] = useReducer(reducer, initialState);

        const {name, description, imageUrl} = state;

        const resetForm = () => {
            dispatch({ type: "reset" });
        };

    const onChange = e => {
        const { id, value } = e.target;
        dispatch({ type: id, value });
    };

        const handleSubmit = async () => {
            setIsLoading(true);
            await fetch('http://localhost:9999/api/articles', {
                method: 'POST',
                body: JSON.stringify(state),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie('x-auth-token')
                }
            }).then(res => {
                setIsLoading(false);
                alert('Article posted!');
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
                setError(true);
            });

            resetForm();
            setIsLoading(false);
        };

        const renderForm = () => error ? <Alert color="warning">Wrong credentials!</Alert> :
            <Container title="Create Article">
                <Form className="px-5" onSubmit={handleSubmit}>
                    <FormGroup>
                        <InputComponent
                            label="Title"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => onChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputComponent
                            label="Content"
                            type="textarea"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputComponent
                            label="Image URL"
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => onChange(e)}
                        />
                    </FormGroup>
                    <Button type="submit" className="text-white">Submit</Button>
                </Form>
            </Container>


        return (
            <PageLayout>
                {
                    isLoading ? <ReactoSpinner/> : renderForm()
                }
            </PageLayout>
        )
    }
;

export default AddArticle;