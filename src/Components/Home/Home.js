import React, { Component } from 'react';
import './Home.css';
import About from '../About/About';
import FreeVideos from '../FreeVideos/FreeVideos';
import { Button, ButtonGroup, Carousel } from 'react-bootstrap';
import slider_1 from '../../assets/images/slider.png';
import { NavLink } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1 "
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={slider_1}
                                        alt="First slide"
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">ادرس علوم اونلاين مع الاستاذ محمد أحمد</h3>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={slider_1}
                                        alt="Second slide"
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">ادرس علوم اونلاين مع الاستاذ محمد أحمد</h3>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={slider_1}
                                        alt="Third slide"
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">ادرس علوم اونلاين مع الاستاذ محمد أحمد</h3>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                <div className="sign">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" className="sign-in" >
                            <NavLink to="/sign-in">  سجل دخولك الآن <i className="fas fa-sign-in-alt"></i></NavLink>
                        </Button>
                        <Button variant="secondary" className="sign-up">
                            <NavLink to="/sign-up"> أنشئ حساب جديد <i className="fas fa-user-plus"></i></NavLink>
                        </Button>
                    </ButtonGroup>
                </div>
                <About/>
                <FreeVideos/>
            </div>
        );
    }
}

export default Home;
