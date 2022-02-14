
import React, { Component, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from './../Footer/Footer';
import "./SignIn.css";
class SignIn extends Component {
    state = {}
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="sign-In" >
                <div>
                    <h3>  تسجيل الدخول </h3>
                    <h6> جميع الحقول مطلوبة <span>*</span></h6>
                </div>
                <Form className="container" onSubmit={this.handleSubmit} >
                    <Col lg={6} xl={6} className="m-auto">
                        <Form.Group controlId="email">
                            <Form.Label>  البريد الإلكترونى</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>  الرقم السرى </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required />
                        </Form.Group>
                        <Form.Group controlId="userName">
                            <Form.Control type="submit" className="submit mb-5" value="تسجيل الدخول " />
                        </Form.Group>
                    </Col>
                </Form>
                <Footer />
            </div>
        );
    }
}
export default SignIn;