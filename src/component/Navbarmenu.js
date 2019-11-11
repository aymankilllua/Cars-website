import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { InputGroup, InputGroupAddon, InputGroupText, Input,Form, FormGroup } from 'reactstrap';
  import "../App.css"
  import FindCar from "./FindCar"
  import RentCar from "./RentCar"
  import Channels from "./Channels"
  import Dealer from "./Dealer"
  import MachanicShop from "./MachanicShop"
  import Home from "./Home"

const Navbarmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav1" color="none" dark expand="md">
                <h1 className="text-light"><span className="text-danger">C</span>ar<span className="text-danger">S</span>hop</h1>
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink> <Link  className="links" to="/Home" >Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link className="links"  to="/FindCar" >Find Car</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="links"  to="/RentCar">Rent Car</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="links"  to="/Dealer">Dealer</Link></NavLink>
            </NavItem>
            
  
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav >
                <i className="fas fa-search" />
              </DropdownToggle >
              <DropdownMenu right style={DropdownItem20}>
                <Form to="/"><FormGroup>
                <InputGroup>
        <Input placeholder="Search" />
        <InputGroupAddon addonType="append">
          <InputGroupText> <i className="fas fa-search" /> </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </FormGroup></Form>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
  );
}
const editdropdwon = window.innerWidth <= 760 ? "20rem" : "60rem"; 
const DropdownItem20 = {
  minWidth:editdropdwon,
  border:"none",
  background:"none",
  padding:"10px"
}

export default Navbarmenu;
