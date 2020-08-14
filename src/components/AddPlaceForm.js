import React, {useReducer, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import networkClient from "../network/network-client";
import ReactoSpinner from "./ReactoSpinner";

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


const AddPlaceForm = ({getArticles}) => {
    const [state, setState] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        setState({field: e.target.name, value: e.target.value});
    };

    const {name, description, imageUrl} = state;

    const resetForm = () => {
        setState(initialState);
    };

    const addNewPlace = async (data) => {
        await networkClient.post(
            `api/places/new`, data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addNewPlace(state);
            getArticles();
            alert('Place submitted successfully!');
            resetForm();
        } catch (error) {
            console.log(error);
            alert('Something went wrong!');
            resetForm();
        }
        setIsLoading(false);
    };

    return (
        <> {
            isLoading ? <ReactoSpinner/> : <Form className="px-5" onSubmit={(e) => handleSubmit(e)}>
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
        }
        </>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setArticles: actions.setArticles,
        getArticles: actions.getArticles
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(AddPlaceForm);