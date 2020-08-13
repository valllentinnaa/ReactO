import React, {useEffect, useState} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Alert, Spinner
} from 'reactstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import Article from "./Article";

const Place = ({id, title, description, imageUrl, articles}) => {


    return (
        <Col md="6">
            <Card>
                <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-capitalize">{title}</CardTitle>
                    <CardSubtitle className="text-action">{articles.length ? `Articles for it: ${articles}` : 'No articles yet!'}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button color="danger">Delete</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Place;