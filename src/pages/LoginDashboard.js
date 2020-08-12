import React from "react";
import Container from "../components/Container";
import {Row, Col} from "reactstrap";
import CardArticle from "../components/dashboard/LoginDashboardArticle";
import ArticlesOverview from "../components/dashboard/LoginDashboardArticlesOverview";
import CardPlace from "../components/dashboard/LoginDashboardPlace";
import Latest from "../components/dashboard/LoginDashboardLatest";
import AddPlaceForm from "../components/AddPlaceForm";

const LoginDashboard = () => {
    return (
        <Container title="Dashboard">
            <Row>
                <Col md="6">
                    <div className="box">
                        <div className="box-header">Last Article Added</div>
                        <div className="box-body px-5">
                            <CardArticle title="Title"
                                         imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
                                         description="Lorem Ipsum Lorem Ipsum"/>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="box">
                        <div className="box-header">Articles Overview</div>
                        <div className="box-body px-5">
                            <ArticlesOverview/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <div className="box">
                        <div className="box-header">Last Place Added</div>
                        <CardPlace title="Title"
                                   imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
                                   description="Lorem Ipsum Lorem Ipsum"/>
                    </div>
                </Col>
                <Col md="4">
                    <div className="box">
                        <div className="box-header">Latest</div>
                        <div className="box-body">
                            <div className="scrollable">
                                <Latest articlesLength="8" subjects="Lqlq, lolo"/>
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

export default LoginDashboard;