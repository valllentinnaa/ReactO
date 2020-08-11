import React from "react";
import {Row, Col} from "reactstrap";
import plans from "../assets/images/plans.png";

const PricePlans = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h4>Pricing Plans</h4>
            </div>
            <Row>
                <Col md="12">
                    <div className="box dashboard-image">
                        <img src={plans} alt="Pricing Table"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default PricePlans;