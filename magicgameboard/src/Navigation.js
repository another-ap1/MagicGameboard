import React,{useState} from "react";
import {Collapse,Button} from "reactstrap";
import {NavLink} from "react-router-dom";
import {Navbar, NavItem, Nav} from "reactstrap";

//components
import DiceRoll from "./DiceRoll";

//styles
import "./styles/navigation.css";
import magicLogo from "./images/magic.png"

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar expand="md nav-bar">

            <NavLink to="/" className="navbar-brand homebtn">
                <img src={magicLogo}/>
            </NavLink>

            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                DiceRoll/CoinFlip
            </Button>
            <Collapse isOpen={isOpen} >
                <DiceRoll/>
            </Collapse>

            <Nav className="ml-auto" navbar>

                <NavItem className="navBtn">
                    <NavLink to="/cardList" className="nav-link">Card Search</NavLink>
                </NavItem>
                
                <NavItem className="navBtn">
                    <NavLink to="/newUser" className="nav-link">  Current/Create User</NavLink>
                </NavItem>

            </Nav>

        </Navbar>
      
    </div>
  );
}

export default Navigation;