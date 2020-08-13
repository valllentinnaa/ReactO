import React, {useEffect, useState} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Alert
} from 'reactstrap';
import {Link} from "react-router-dom";
import {getLast} from "../../utils/methods";
import ReactoSpinner from "../ReactoSpinner";

const LastPlace = ({places, isLoaded}) => {
    const [place, setPlace] = useState({});

    useEffect(() => {
        setPlace(getLast(places));
    }, [places]);

    const renderLastPlace = () => (place && Object.keys(place)) ? <>
        <Card className="card-container">
            <CardImg top src={place.imageUrl}
                     alt="Card image cap"/>
            <CardBody>
                <CardTitle>{place.title}</CardTitle>
                <CardSubtitle>{place.articles.length ? `Articles for it: ${place.articles}` : 'No articles yet!'}</CardSubtitle>
                <CardText className="text-truncate">{place.description}</CardText>
                <Link exact to="/places">
                    <Button
                        className="text-white"
                    >See more</Button>
                </Link>
            </CardBody>
        </Card>
    </> : <Alert color="light">No places found.</Alert>;


    return (
        <>
            {
                isLoaded ? renderLastPlace() : <ReactoSpinner/>}
        </>
    )
};

export default LastPlace;