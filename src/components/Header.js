import React from "react";
import {
    Navbar,
    Nav,
    NavLink,
    NavbarBrand,
    Button
} from "reactstrap";
import avatar from "../assets/images/avatar.svg";
import actionLogo from "../assets/images/reacto-transparent.png";
import NavItem from "reactstrap/lib/NavItem";
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar color="white" expand="lg" className="p-1">
                <NavbarBrand href="/" className="header-logo">
                    <img src={actionLogo} alt="Header Logo"/>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink tag={RRNavLink}
                               exact to="/plans">
                          <Button size="sm" outline color="action" className="pulsing-button">Buy your ReactO</Button>
                      </NavLink>
                  </NavItem>
                    <NavItem className="header-item avatar">
                        <img src={avatar} alt="User Profile"/>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;