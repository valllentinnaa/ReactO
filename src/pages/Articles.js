import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import Article from "../components/Article";
import {Alert, Spinner} from 'reactstrap';
import Container from "../components/Container";

const Articles = ({articles, getArticles}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getArticles()
    }, []);

    useEffect(() => {
        if (articles.length) {
            setIsLoaded(true);
        }
    }, [articles]);

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
            return <div className="spinner-container">
                <Spinner color="secondary"/>
            </div>
        }
    };


    return (
        <Container title="All Articles">
            {renderArticles()}
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setArticles: actions.setArticles,
        getArticles: actions.getArticles
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Articles);