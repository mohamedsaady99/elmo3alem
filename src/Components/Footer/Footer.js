import React, { Component } from 'react';
import logo from '../../assets/images/svg/logo.svg';
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";
class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer ">
                <div className="row no-gutters">
                    <div className=" col-md-6  col-sm-12 col-12">
                        <img src={logo} alt="Logo image" />
                        <span className="logo"> المُعَلِّم</span>
                    </div>
                    <div className="col-md-6  col-sm-12 col-12">
                        <p>mr.mohammed@science.com </p>
                        <p>01099899899</p>
                    </div>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i> </a></li>
                        <li><a href="http://www.twitter.com"><i className="fab fa-twitter"></i> </a></li>
                        <li> <a href="http://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="copy-writes">جميع حقوق المحتويات محفوظة للأستاذ محمد أحمد 2021 - 2022</div>
            </div>
        );
    }
}

export default Footer;