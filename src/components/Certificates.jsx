import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slide1 from '../img/Slide1.png';
import Slide2 from '../img/Slide2.png';
import '../css/Certificates.css';


const Certificates = () => {

    return (
        <div className="Certificates">
            <h1>Certificates</h1>
            <Slide>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${Slide1})` }}>
                        {/* <span>Slide 1</span> */}
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${Slide2})` }}>
                        {/* <span>Slide 2</span> */}
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Certificates;