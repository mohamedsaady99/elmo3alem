import React, { Component } from 'react';
import './About.css';
import about from '../../assets/images/about.png';
class About extends Component {
    state = {}
    render() {
        return (
            <div className="container about">
                <h3>عن الأستاذ محمد أحمد </h3>
                <hr/>
                <div className="row no-gutters">
                    <div className=" col-md-3 col-sm-12 col-12 first">
                        <img src={about} />
                    </div>
                    <div className=" col-md-9  col-sm-12 col-12">
                        <p>
                            هناك <b>حقيقة</b> مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم  <b>إيبسوم</b> لأنها تعطي توزيعاَ طبيعياَ
                            -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص <b>مقروء</b>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;