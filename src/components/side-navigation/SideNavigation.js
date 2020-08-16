import React, {Component} from "react";
import UserContext from "../../Context";
import getNavigation from "../../utils/navigation";
import SideNavigationLink from "./SideNavigationLink";

class SideNavigation extends Component {

    static contextType = UserContext;

    render() {
        const {
            user
        } = this.context;

        const links = getNavigation(user);

        return (
            <div className="side-navigation">
                <div className="side-navigation-body">
                    {
                        links.map(navElement => {
                            return (
                                <SideNavigationLink
                                    key={navElement.title}
                                    href={navElement.link}
                                    title={navElement.title}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SideNavigation