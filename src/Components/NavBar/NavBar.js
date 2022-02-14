import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../assets/images/svg/logo.svg';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" className="container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <LinkContainer to="/sign-up">
                <Nav.Link id="signUp" className="nav-link signUp underline-from-center"> تسجيل جديد</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sign-in">
                <Nav.Link id="signIn" className="nav-link  underline-from-center"> تسجيل دخول</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/free-videos">
                <Nav.Link className="nav-link third-nav underline-from-center" >  محاضرات مجانية</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/explanation-lectures">
                <Nav.Link className="nav-link second-nav underline-from-center">محاضرات الشرح</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className="nav-link first-nav  underline-from-center " > الرئيسية</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo}/>
                  المُعَلِّم
            </Navbar.Brand>
          </LinkContainer>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;