import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {getLastTitles} from "../../utils/methods";
import ReactoSpinner from "../ReactoSpinner";

const Latest = ({articles, places, isLoaded}) => {
    const [articlesTitles, setArticlesTitles] = useState([]);
    const [placesTitles, setPlacesTitles] = useState([]);

    useEffect(() => {
        if (articles.length) {
            setArticlesTitles(getLastTitles(articles));
        }
    }, [articles]);

    useEffect(() => {
        if (places.length) {
            setPlacesTitles(getLastTitles(places));
        }
    }, [places]);

    return (
        <>
            {
                isLoaded ? <>
                    <div className="latest-item">
                        <div className="latest-item-icon-container">
                            <div className="latest-item-icon">
                                <Link exact to="/articles">
                                    <i className="fa fa-newspaper-o ml-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div>
                            {
                                articles.length ? <>
                                    <div>{articles.length} total articles</div>
                                    <div className="text-secondary text-truncate">Most recents with themes such
                                        as {articlesTitles.join(", ")}</div>
                                </> : <div>No articles!</div>
                            }
                        </div>
                    </div>
                    <div className="latest-item">
                        <div className="latest-item-icon-container">
                            <div className="latest-item-icon">
                                <Link exact to="/places">
                                    <i className="fa fa-map-pin ml-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div> {
                            places.length ? <>
                                <div>{places.length} places in total</div>
                                <div className="text-secondary text-truncate">Most recents
                                    are {placesTitles.join(", ")}</div>
                            </> : <div>No places!</div>
                        }
                        </div>
                    </div>
                </> : <ReactoSpinner/>
            }
        </>
    );
};

export default Latest;