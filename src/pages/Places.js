import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import Container from "../components/Container";
import Place from "../components/Place";
import {Alert, Row, Spinner} from "reactstrap";

const Places = ({places, getPlaces}) => {
    console.log(places);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getPlaces()
    }, []);

    useEffect(() => {
        if (places.length) {
            setIsLoaded(true);
        }
    }, [places]);

    const renderPlaces = () => {
        if (isLoaded) {
            if (places.length) {
                return places.map(place => {
                    return <Place
                        key={place._id}
                        id={place._id}
                        title={place.name}
                        description={place.description}
                        imageUrl={place.imageUrl}
                        articles={place.articles}/>
                });
            } else {
                return <Alert color="light">No articles found.</Alert>
            }
        } else {
            return <div className="spinner-container">
                <Spinner color="secondary"/>
            </div>
        }
    };
    return (
        <Container title="Places">
            <Row>
                {renderPlaces()}
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        places: state.places
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setPlaces: actions.setPlaces,
        getPlaces: actions.getPlaces
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Places);