import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import Container from "../components/Container";
import {Row, Col, Alert, Spinner} from "reactstrap";
import LastArticle from "../components/dashboard/LoginDashboardLastArticle";
import ArticlesOverview from "../components/dashboard/LoginDashboardArticlesOverview";
import LastPlace from "../components/dashboard/LoginDashboardLastPlace";
import Latest from "../components/dashboard/LoginDashboardLatest";
import AddPlaceForm from "../components/AddPlaceForm";

const LoginDashboard = ({articles, places, getArticles, getPlaces}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        getPlaces();
    }, []);

    useEffect(() => {
        if (articles.length) {
            setIsLoaded(true);
        }
    }, [articles]);

    return (
        <Container title="Dashboard">
            <Row>
                <Col md="6">
                    <div className="box">
                        <div className="box-header">Last Article Added</div>
                        <div className="box-body px-5">
                            <LastArticle articles={articles} isLoaded={isLoaded}/>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="box">
                        <div className="box-header">Articles Overview</div>
                        <div className="box-body px-5">
                            <ArticlesOverview articles={articles} isLoaded={isLoaded}/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <div className="box">
                        <div className="box-header">Last Place Added</div>
                        <LastPlace places={places} isLoaded={isLoaded}/>
                    </div>
                </Col>
                <Col md="4">
                    <div className="box">
                        <div className="box-header">Latest</div>
                        <div className="box-body">
                            <div className="scrollable">
                                <Latest articles={articles} places={places} isLoaded={isLoaded}/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="box">
                        <div className="box-header">Add a place</div>
                        <div className="box-body px-2">
                            <div className="scrollable">
                                <AddPlaceForm/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles,
        places: state.places
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setArticles: actions.setArticles,
        getArticles: actions.getArticles,
        setPlaces: actions.setPlaces,
        getPlaces: actions.getPlaces,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(LoginDashboard);