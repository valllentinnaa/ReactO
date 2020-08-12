import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";


class PlaceModifyForm extends Component{
    componentDidMount = () => {
        const placeId = this.props.match.params.id;
        this.props.getArticle(placeId);
    };
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Title</Label>
                    <Input type="text" name="name" id="name" placeholder={this.props.article.name ? this.props.article.name : ''} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Content</Label>
                    <Input type="textarea" name="description" id="description" placeholder={this.props.article.description ? this.props.article.description : ''} />
                </FormGroup>
                <FormGroup>
                    <Label for="imageUrl">Image URL</Label>
                    <Input type="text" name="imageUrl" id="imageUrl"  placeholder={this.props.article.imageUrl ? this.props.article.imageUrl : ''}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
};

const mapStateToProps = state => {
    return {
        places: state.article,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getPlaces: actions.getPlaces,
        setPlaces: actions.setPlaces,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)
(withRouter(PlaceModifyForm));