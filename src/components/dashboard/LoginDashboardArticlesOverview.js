import React, {useEffect, useState} from "react";
import {Alert} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ReactoSpinner from "../ReactoSpinner";
import {getLastTitles} from "../../utils/methods";

const ArticlesOverview = ({articles, isLoaded}) => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        if(articles.length) {
            setTitles(getLastTitles(articles));
        }
    }, [articles]);

    const renderTitles = () => titles.length ? <ListGroup>
        {titles.map(title => <ListGroupItem>{title}</ListGroupItem>)}
    </ListGroup> : <Alert color="light">No articles found.</Alert>;


    return (
        <>
            <div className="pb-2">
                <div className="text-action pb-2">Most recent subjects</div>
                {isLoaded ? renderTitles() : <ReactoSpinner/>}
            </div>
        </>
    )
};

export default ArticlesOverview;