import React, {useEffect, useState} from "react";
import {Alert, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {getLast} from "../../utils/methods";
import ReactoSpinner from "../ReactoSpinner";

const LastArticle = ({articles, isLoaded}) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        setArticle(getLast(articles));
    }, [articles]);

    const renderLastArticle = () => (Object.keys(article)) ?  <>
                <div className="pb-3 text-action">{article.name}</div>
                <div className="pb-2">
                    {article.description}
                </div>
                <Link exact to="/articles">
                    <Button
                        className="text-white"
                    >See more</Button>
                </Link>
            </> : <Alert color="light">No articles found.</Alert>;

    return (
        <>
            {
                isLoaded  ? renderLastArticle() : <ReactoSpinner/>}
        </>
    )
};



export default LastArticle;