import React from "react";
import {Row, Col, Button, Card, CardHeader, CardTitle, CardBody, NavLink} from "reactstrap";
import Container from "../components/Container";
import {NavLink as RRNavLink} from "react-router-dom";
import PageLayout from "../components/page-layout";

const PricePlans = () => {
    return (
        <PageLayout>
            <Container title="Pricing Plans">
                <Row>
                    <Col sm="12">
                        <div className="box text-center">
                            <Row>
                                <Col md="4" className="p-5">
                                    <div className="px-4">
                                        <h4 className="mb-5">Basic</h4>
                                        <span
                                            className="h5 d-inline-flex border px-5 py-3 rounded-lg mb-3">Free</span>
                                        <br/>
                                        <p className="mb-10 d-flex flex-column text-dark-50">
                                            <span>Lorem ipsum dolor sit amet adipiscing elit</span>
                                            <span>sed do eiusmod tempors labore et dolore</span>
                                            <span>magna siad enim aliqua</span>
                                        </p>
                                        <NavLink tag={RRNavLink}
                                                 exact to="/register">
                                            <Button color="action"
                                                    className="text-uppercase font-weight-bolder mt-5 text-white">Download
                                            </Button>
                                        </NavLink>
                                    </div>
                                </Col>
                                <Col md="4" className="bg-secondary rounded shadow-sm p-5">
                                    <div className="px-4">
                                        <h4 className="mb-5 text-white">Professional</h4>
                                        <span
                                            className="px-5 py-3 bg-white d-flex align-items-center justify-content-center rounded-lg mb-1">
														<span className="text-action">$</span>
														<span
                                                            className="h3 font-weight-bold text-action pr-1">29</span>
														<span
                                                            className="text-action">/&nbsp;&nbsp;Per Installation</span>
													</span>
                                        <br/>
                                        <p className="text-white mb-10 d-flex flex-column">
                                            <span>Lorem ipsum dolor sit amet adipiscing elit</span>
                                            <span>sed do eiusmod tempors labore et dolore</span>
                                            <span>magna siad enim aliqua</span>
                                        </p>
                                        <NavLink tag={RRNavLink}
                                                 exact to="/register">
                                            <Button color="action"
                                                    className="text-uppercase font-weight-bolder px-15 py-3 mt-5 text-white">Purchase
                                            </Button>
                                        </NavLink>
                                    </div>
                                </Col>
                                <Col md="4" className="p-5">
                                    <div className="px-4">
                                        <h4 className="mb-5">Extended</h4>
                                        <span
                                            className="d-flex align-items-center justify-content-center border px-5 py-3 rounded-lg mb-1">
														<span>$</span>
														<span
                                                            className="h3 pr-1">99</span>
														<span>/&nbsp;&nbsp;Per Installation</span>
													</span>
                                        <br/>
                                        <p className="mb-10 d-flex flex-column text-dark-50">
                                            <span>Lorem ipsum dolor sit amet adipiscing elit</span>
                                            <span>sed do eiusmod tempors labore et dolore</span>
                                            <span>magna siad enim aliqua</span>
                                        </p>
                                        <NavLink tag={RRNavLink}
                                                 exact to="/register">
                                            <Button color="action"
                                                    className="text-uppercase font-weight-bolder mt-5 text-white">Purchase
                                            </Button>
                                        </NavLink>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PageLayout>
    );
};

export default PricePlans;