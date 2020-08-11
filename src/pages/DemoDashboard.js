import React from "react";
import {Row, Col} from "reactstrap";
import demoDashboardSmallImage from "../assets/images/demo-dashboard-small.png";
import demoDashboardBigImage from "../assets/images/demo-dashboard-big.png";
import {Link} from 'react-router-dom';
import Container from "../components/Container";


const DemoDashboard = () => {
    return (
        <Container title="Dashboard">
            <Row>
                <Col md="4">
                    <Link exact to="/plans" className="box dashboard-image">
                        <img src={demoDashboardSmallImage} alt="Dashboard"/>
                    </Link>
                </Col>
                <Col md="8">
                    <Link exact to="/plans" className="box dashboard-image">
                        <img src={demoDashboardBigImage} alt="Dashboard"/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
};

export default DemoDashboard;