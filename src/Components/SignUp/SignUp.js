import React, { Component, useState } from 'react';
import { Form, Col, CardDeck, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './../Footer/Footer';
import "./SignUp.css";
import axios from 'axios';
import $ from "jquery";
class SignUp extends Component {
    state = {
        fullName: "",
        password: "",
        mobile: 0,
        fatherMobile: 0,
        fatherJob: "",
        gender: 0,
        userName: "",
        state: "",
        stateId: 1,
        email: "",
        city: "",
        classRoom: "",
        companyId: 74,
        branchId: 176,
        schoolStagesId: 1
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
        await axios.post("Enter URL HERE ", this.state)
            .then(response => {
                if (response.data.msgType == "fail")
                    alert(response.data.msg)
                else {
                    this.props.history.replace("/");
                }
            });
    }
    render() {
        var cities = [
            "",
            "القاهرة",
            "الجيزة",
            "الإسكندرية",
            "أسوان",
            'بورسعيد',
            "الإسماعيلية",
            "السويس",
            "الشرقية",
            "شمال سيناء",
            "جنوب سيناء",
            "أسيوط",
            "الأقصر",
            "الوادي الجديد",
            "المنيا",
            "المنوفية",
            "مطروح",
            "قنا",
            "كفر الشيخ",
            "القليوبية",
            "الفيوم",
            "الغربية",
            "سوهاج",
            "دمياط",
            "الدقهلية",
            "بني سويف",
            "البحيرة",
            "البحر الأحمر"
        ];
        var states = [
            "دسوق",
            "فوه ",
            " مطوبس",
            "قلين ",
            " سيدى سالم",
            " الرياض",
            "بيلا ",
            "الحامول ",
            "البرلس ",
            " المعادى",
            "القاهرة",
            "الجيزة",
            "الإسكندرية",
            "أسوان",
            'بورسعيد',
            "الإسماعيلية",
            "السويس",
            "الشرقية",
            "شمال سيناء",
            "جنوب سيناء",
            "أسيوط",
            "الأقصر",
            "الوادي الجديد",
            "المنيا",
            "المنوفية",
            "مطروح",
            "قنا",
            "كفر الشيخ",
            "القليوبية",
            "الفيوم",
            "الغربية",
            "سوهاج",
            "دمياط",
            "الدقهلية",
            "بني سويف",
            "البحيرة",
            "البحر الأحمر"
        ];
        const { students } = this.props;
        return (
            <div className="signUp" >
                <div>
                    <h3>إنشاء حساب جديد </h3>
                    <h6> جميع الحقول مطلوبة <span>*</span></h6>
                </div>
                <Form className="container" onSubmit={this.handleSubmit} >
                    <Form.Row>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="city">
                                <Form.Label>المحافظة  </Form.Label>
                                <Form.Control as="select" custom
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    required>
                                    {cities.map(city => {
                                        return (
                                            <option key={Math.random()}> {city}</option>
                                        );
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} >
                            <Form.Group controlId="fullName">
                                <Form.Label>   الاسم </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    value={this.state.fullName}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="state">
                                <Form.Label>المركز  </Form.Label>
                                <Form.Control list="browsers"
                                    type="text"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    required
                                />
                                <datalist id="browsers">
                                    {states.map(state => {
                                        return (
                                            <option key={Math.random()} value={state} />
                                        )
                                    })}
                                </datalist>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="email">
                                <Form.Label>  البريد الإلكترونى</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="gender">
                                <Form.Label> النوع   </Form.Label>
                                <Form.Control as="select"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    custom required>
                                    <option > </option>
                                    <option value="1">ذكر </option>
                                    <option value="2">  أنثى  </option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="mobile">
                                <Form.Label>تليفون الطالب </Form.Label>
                                <Form.Control
                                    type="int"
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="classRoom">
                                <Form.Label>الصف الدراسى   </Form.Label>
                                <Form.Control as="select"
                                    name="classRoom"
                                    value={this.state.classRoom}
                                    onChange={this.handleChange}
                                    custom required>
                                    <option>   </option>
                                    <option> الصف الأول الاعدادى </option>
                                    <option> الصف الثانى الاعدادى </option>
                                    <option> الصف الثالث الاعدادى </option>
                                    <option> الصف الأول الثانوى </option>
                                    <option> الصف الثانى الثانوى </option>
                                    <option> الصف الثالث الثانوى </option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="fatherMobile">
                                <Form.Label>تليفون ولى الأمر </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fatherMobile"
                                    value={this.state.fatherMobile}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="userName">
                                <Form.Label>  اسم المستخدم </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}  >
                            <Form.Group controlId="fatherJob">
                                <Form.Label>وظيفة ولى الأمر </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fatherJob"
                                    value={this.state.fatherJob}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col xs={{ order: 2 }} xs={12} md={{ order: 2 }} sm={12}  >
                            <Form.Group controlId="password">
                                <Form.Label>  الرقم السرى </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required />
                            </Form.Group>
                        </Col>
                        <Col xs={{ order: 1 }} sm={12} md={{ order: 1 }} className="mb-5">
                            <Form.Group>
                                <Form.Control type="submit" className="submit-btn" value="تسجيل الدخول " />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
                <Footer />
            </div>
        );
    }
}
export default SignUp;