import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Container from "../components/Container";

class CreateArticle extends Component{
    render() {
        return (
         <Container title="Create Article">
             <Form className="px-5">
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
                 <Button>Submit</Button>
             </Form>
         </Container>
        );
    }
};

export default CreateArticle;