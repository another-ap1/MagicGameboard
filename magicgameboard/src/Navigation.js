//Nav bar that will be shown at the top at all times that gives you the links to 
// the rules and card search routes. 

import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, NavItem, Nav} from "reactstrap";

import "./styles/navigation.css";

function Navigation() {
  return (
    <div>
        <Navbar expand="md nav-bar">
            <NavLink to="/" className="navbar-brand homebtn">
                MTG Gameboard
            </NavLink>

            <Nav className="ml-auto" navbar>

                <NavItem>
                    <NavLink to="/cardList" className="nav-link">Cards</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/newUser" className="nav-link">Current/Create User</NavLink>
                </NavItem>

            </Nav>
        </Navbar>
      
    </div>
  );
}

export default Navigation;