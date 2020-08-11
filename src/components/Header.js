import React from "react";
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    NavbarBrand
} from "reactstrap";
import avatar from "../assets/images/avatar.svg";
import actionLogo from "../assets/images/reacto-transparent.png";
import NavItem from "reactstrap/lib/NavItem";

const Header = () => {
    return (
        <div>
            <Navbar color="white" expand="lg" className="p-1">
                <NavbarBrand href="/" className="header-logo">
                    <img src={actionLogo} alt="Header Logo"/>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown>
                        <DropdownToggle className="header-item" nav caret>
                            Theme
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Light Theme
                            </DropdownItem>
                            <DropdownItem onClick={() => document.documentElement.setAttribute('data-theme', 'dark')}>
                                Dark Theme
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem className="header-item avatar">
                        <img src={avatar} alt="User Profile"/>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;