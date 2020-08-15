import React, {useCallback, useContext, useEffect, useState} from "react";
import PageLayout from "../../components/page-layout";
import Container from "../../components/Container";
import {Row, Col, Alert, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import UserContext from "../../Context";
import getArticles from "../../utils/articles";
import ReactoSpinner from "../../components/ReactoSpinner";

const LoginDashboard = (props) => {
    const context = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState(context.articles || []);


    const getArticlesFetch = useCallback(async () => {
        const articles = await getArticles(3);
        setArticles(articles);
        setIsLoaded(true);
    }, []);

    const renderArticles = () => {
        if (isLoaded) {
            if (articles.length) {
                return articles.map(article => {
                    return <Col md="4">
                        <Card>
                            <CardImg top width="100%" src={article.imageUrl} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>{article.name}</CardTitle>
                                <CardText>{article.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                });
            } else {
                return <Alert color="light">No articles found.</Alert>
            }
        } else {
            return <ReactoSpinner/>
        }
    };

    useEffect(() => {
        getArticlesFetch();
    }, []);
    return (
        <PageLayout>
            <Container title="Dashboard">
                <div className="text-action h5 pb-3">Most recent articles</div>
                <Row>
                    {renderArticles()}
                </Row>
            </Container>
        </PageLayout>
    )
};

export default LoginDashboard;