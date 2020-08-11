import React, {useState} from "react";
import {Link, NavLink as RRNavLink} from 'react-router-dom';

const SideNavigation = () => {
    const [isArticlesOptionsVisible, setIsArticlesOptionsVisible] = useState(false);
    const [isPlacesOptionsVisible, setIsPlacesOptionsVisible] = useState(false);
    return (
        <div className="side-navigation">
            <div className="side-navigation-body">
                <div className="side-navigation-item">
                    <Link tag={RRNavLink} exact to="/dashboard">
                        Dashboard
                    </Link>
                </div>
                <div className="side-navigation-item">
                    <Link tag={RRNavLink} exact to="/plans">Price Plans</Link>
                </div>
                <div className="side-navigation-item">
                    <Link tag={RRNavLink} exact to="/contacts">Contacts</Link>
                </div>

                <div className="side-navigation-item">
                    <Link
                        to="#"
                        onClick={() => setIsArticlesOptionsVisible(!isArticlesOptionsVisible)}
                    >Articles</Link>
                </div>

                {isArticlesOptionsVisible &&
                <>
                    <div className="side-navigation-item side-navigation-sub-item">
                        <i className="fa fa-arrow-right ml-3"></i>
                        <Link tag={RRNavLink} exact to="/articles">All Articles</Link>
                    </div>
                    <div className="side-navigation-item side-navigation-sub-item">
                        <i className="fa fa-arrow-right ml-3"></i>
                        <Link tag={RRNavLink} exact to="/articles/create">Create New Article</Link>
                    </div>
                </>
                }

                <div className="side-navigation-item">
                    <Link
                        to="#"
                        onClick={() => setIsPlacesOptionsVisible(!isPlacesOptionsVisible)}
                    >Places</Link>
                </div>

                {isPlacesOptionsVisible &&
                <>
                    <div className="side-navigation-item side-navigation-sub-item">
                        <i className="fa fa-arrow-right ml-3"></i>
                        <Link tag={RRNavLink} exact to="/places">All Places</Link>
                    </div>
                    <div className="side-navigation-item side-navigation-sub-item">
                        <i className="fa fa-arrow-right ml-3"></i>
                        <Link tag={RRNavLink} exact to="/places/create">Create Place</Link>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default SideNavigation;