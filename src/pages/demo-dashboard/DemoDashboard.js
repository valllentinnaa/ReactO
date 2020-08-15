import React from "react";
import PageLayout from "../../components/page-layout";
import Container from "../../components/Container";
import {Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import demoDashboardSmallImage from "../../assets/images/demo-dashboard-small.png";
import demoDashboardBigImage from "../../assets/images/demo-dashboard-big.png";

const DemoDashboard = () => {
    return (
        <PageLayout>
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
        </PageLayout>
    )
};

export default DemoDashboard;