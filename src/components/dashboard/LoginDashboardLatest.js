import React from "react";
import {Link} from 'react-router-dom';

const Latest = ({articlesLength, subjects}) => {
    return (
        <>
            <div className="latest-item">
                <div className="latest-item-icon-container">
                <div className="latest-item-icon">
                    <Link exact to="/articles">
                        <i className="fa fa-newspaper-o ml-3"></i>
                    </Link>
                </div>
                </div>
                <div>
                    <div>{articlesLength.length} articles in total</div>
                    <div className="text-secondary text-truncate">Most recents with themes such as {subjects}</div>
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
                <div>
                    <div>{articlesLength.length} places in total</div>
                    <div className="text-secondary text-truncate">Most recents are {subjects}</div>
                </div>
            </div>
        </>
    );
};

export default Latest;