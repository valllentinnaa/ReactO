import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";

const CardPlace = () => {

    return (
        <Card className="card-container">
            <CardImg top src="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
                     alt="Card image cap"/>
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText className="text-truncate">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</CardText>
                <Link exact to="/places">
                    <Button
                        className="text-white"
                    >See more</Button>
                </Link>
            </CardBody>
        </Card>
    )
};

export default CardPlace;