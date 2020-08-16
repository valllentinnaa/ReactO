import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    NavLink,
    NavbarBrand,
    Button
} from "reactstrap";
import UserContext from '../Context';
import actionLogo from '../assets/images/reacto-transparent.png';
import avatar from "../assets/images/avatar.svg";
import NavItem from "reactstrap/lib/NavItem";
import {NavLink as RRNavLink} from 'react-router-dom';


class Header extends Component {

    static contextType = UserContext;

    render() {
        const {
            user
        } = this.context;

        const path = user ? `profile/${user.id}` : 'login';

        return (
            <div>
                <Navbar color="white" expand="lg" className="p-1">
                    <NavbarBrand href="/dashboard" className="header-logo">
                        <img src={actionLogo} alt="Header Logo"/>
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        {!user && <NavItem>
                            <NavLink tag={RRNavLink}
                                     exact to="/plans">
                                <Button size="sm" outline color="action" className="pulsing-button">Buy your
                                    ReactO</Button>
                            </NavLink>
                        </NavItem>}
                        <NavItem className="header-item avatar">
                            <NavLink tag={RRNavLink}
                                     exact to={`/${path}`}>
                                <img src={avatar} alt="User Profile"/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header