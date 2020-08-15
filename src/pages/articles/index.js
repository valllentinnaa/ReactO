import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react'
import UserContext from "../../Context";
import getArticles from "../../utils/articles";
import Container from "../../components/Container";
import ReactoSpinner from "../../components/ReactoSpinner";
import {Alert} from 'reactstrap';
import Article from "../../components/Article";
import PageLayout from "../../components/page-layout";

const Articles = (props) => {
    const context = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState(context.articles || []);


    const getArticlesFetch = useCallback(async () => {
        const articles = await getArticles(props.length);
        setArticles(articles);
        setIsLoaded(true);
    }, [props.length]);

    const renderArticles = () => {
        if (isLoaded) {
            if (articles.length) {
                return articles.map(article => {
                    return <Article
                        key={article._id}
                        id={article._id}
                        title={article.name}
                        description={article.description}
                        imageUrl={article.imageUrl}/>
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
            <Container title="Articles">
                {renderArticles()}
            </Container>
        </PageLayout>
    )
};

export default Articles;
