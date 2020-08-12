import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const AddPlaceForm = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="name">Title</Label>
                <Input type="text" name="name" id="name"/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Content</Label>
                <Input type="textarea" name="description" id="description"/>
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image URL</Label>
                <Input type="text" name="imageUrl" id="imageUrl"/>
            </FormGroup>
            <Button className="text-white">Submit</Button>
        </Form>
    );
};

export default AddPlaceForm;