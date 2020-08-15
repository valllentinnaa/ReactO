import React from 'react'
import {
    Link
} from 'react-router-dom'

const SideNavigationLink = ({ title, href }) => {
    return (
        <div data-test-id={`link-${title}`} className="side-navigation-item">
            <Link exact to={href}>
                {title}
            </Link>
        </div>
    )
};

export default SideNavigationLink;