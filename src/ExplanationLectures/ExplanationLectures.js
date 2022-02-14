import React ,{useEffect} from 'react'
import Footer from '../Components/Footer/Footer';
import FreeVideos from '../Components/FreeVideos/FreeVideos'
import poster1 from '../assets/images/video1.png';
import poster2 from '../assets/images/video2.png';
import poster3 from '../assets/images/video3.png';
import video from '../assets/images/video.webm';
import {  Card, CardDeck } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
function ExplanationLectures() {
  useEffect(() => {
    
        $("#myvideo1,#myvideo2,#myvideo3").hover(function (event) {
            $("#myvideo1,#myvideo2,#myvideo3").css(  "cursor", "pointer" );
            if (event.type === "mouseenter") {
                $(this).attr("controls", "");
            } else if (event.type === "mouseleave") {
                $(this).removeAttr("controls");
            }
        });
    
  }, [])
    return (
        <div className=" free-videos " >
        <div className=" container" >
            <h3>فيديوهات الشرح</h3>
            <hr />
            <CardDeck className="container m-auto">
                <Card>
                    <video width="100%" height="240" poster={poster1} id="myvideo1" >
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>
                    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster2} id="myvideo2">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>الدعامة فى الانسان / العمود الفقرى</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster3} id="myvideo3">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck className="container m-auto">
                <Card>
                    <video width="100%" height="240" poster={poster1} id="myvideo1" >
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>
                    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster2} id="myvideo2">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>الدعامة فى الانسان / العمود الفقرى</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster3} id="myvideo3">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck className="container m-auto">
                <Card>
                    <video width="100%" height="240" poster={poster1} id="myvideo1" >
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>
                    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster2} id="myvideo2">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>الدعامة فى الانسان / العمود الفقرى</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <video width="100%" height="240" poster={poster3} id="myvideo3">
                        <source src={video} type="video/webm" />
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                    </video>    <Card.Body>
                        <Card.Title>آلية عمل العام الدراسى الجديد</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            <NavLink className="btn btn-link" to="/free-videos"> كل الفيديوهات</NavLink>
        </div>
        <Footer/>
    </div>
    )
}

export default ExplanationLectures;
