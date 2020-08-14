import React, {useReducer, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Container from "../components/Container";
import networkClient from '../network/network-client';
import ReactoSpinner from "../components/ReactoSpinner";

const initialState = {
    name: '',
    description: '',
    imageUrl: ''
};

function reducer(state, {field, value}) {
    return {
        ...state,
        [field]: value
    }
}

const CreateArticle = () => {
    const [state, setState] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setState({field: e.target.name, value: e.target.value});
    };

    const {name, description, imageUrl} = state;

    const resetForm = () => {
        setState(initialState);
    };

    const addNewArticle = async (data) => {
        return await networkClient.post(
            `api/articles/new`, data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addNewArticle(state);
            alert('Article submitted successfully!');
            resetForm();
        } catch(error) {
            console.log(error);
            alert('Something went wrong!');
            resetForm();
        }
        setIsLoading(false);
    };

    return (
        <>
        {
            isLoading ? <ReactoSpinner/> : <Container title="Create Article">
                <Form className="px-5" onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                        <Label for="name">Title</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => onChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Content</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageUrl">Image URL</Label>
                        <Input
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
        }
        </>
    );
};


export default CreateArticle;